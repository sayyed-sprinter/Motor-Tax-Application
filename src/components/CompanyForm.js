import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import axios from 'axios';

import { BiLinkAlt } from 'react-icons/bi';
import { VscLoading } from 'react-icons/vsc';
import { createNewlInsuranceCompany } from '../actions/insuranceAction';
import Button from './Button';

const CompanyForm = () => {
  const dispatch = useDispatch();

  const [insuranceCompany, setInsuranceCompany] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [vatNumber, setVatNumber] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');

  const [vat_file_path, setVat_file_path] = useState(false);
  const [license_file_path, setLicense_file_path] = useState(false);

  const [vatFile, setVatFile] = useState('Attach your VAT registered document');
  const [licenseFile, setLicenseFile] = useState(
    'Attach your company license document'
  );

  const [fileLoading, setFileLoading] = useState(false);
  const [vatLoader, setVatLoader] = useState(false);
  const [licenseLoader, setLicenseLoader] = useState(false);

  // DISPLAY Loader
  const showLoader = (type) => {
    if (type === 'vat') {
      setVatLoader(true);
    }
    if (type === 'license') {
      setLicenseLoader(true);
    }
  };

  // SET FILE PATHS
  const setFilePaths = (path, type) => {
    if (type === 'vat') {
      setVat_file_path(`https://motor-tax.herokuapp.com/${path}`);
    }
    if (type === 'license') {
      setLicense_file_path(`https://motor-tax.herokuapp.com/${path}`);
    }
  };

  // DISPLAY TOOLTIPS
  const showTooltip = (name, type) => {
    if (type === 'vat') {
      const class_vat = document.querySelector('.tooltip-vat');
      class_vat.innerText = name;
    }
    if (type === 'license') {
      const class_license = document.querySelector('.tooltip-license');
      class_license.innerText = name;
    }
  };

  const uploadFileHandler = async (e, type) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('documents', file);
    showLoader(type);
    setFileLoading(true);
    try {
      const config = {
        headers: { 'Content-Type': 'multipart/form-data' },
      };

      const {
        data: {
          file: { name, path },
        },
      } = await axios.post(
        `https://motor-tax.herokuapp.com/api/uploads/document`,
        formData,
        config
      );

      showTooltip(name, type);

      // ASSIGN NAME
      if (e.target.id === 'vat-file') {
        setVatFile('doc...');
      }
      if (e.target.id === 'license-file') {
        setLicenseFile('doc...');
      }
      setVatLoader(false);
      setLicenseLoader(false);

      // SAVE FILE PATH IN filePath
      setFilePaths(path, type);
    } catch (error) {
      setFileLoading(false);
      console.error(`Error occured: ${error}`);
    }
  };

  const submitCompanyFormHandler = (e) => {
    e.preventDefault();

    dispatch(
      createNewlInsuranceCompany({
        insuranceCompany,
        licenseNumber,
        vatNumber,
        address,
        contact,
        email,
        vat_file_path,
        license_file_path,
      })
    );
  };

  return (
    <section className='form--new-insurance'>
      <form
        action=''
        className='company-form--grid'
        onSubmit={submitCompanyFormHandler}
      >
        {/* text-box-container */}
        <section className='text-box'>
          {/* text-box-insurance-company-name */}
          <section className='input--text'>
            <label className='label' htmlFor='insurance_company'>
              Insurance Company Name
            </label>
            <input
              type='text'
              id='insurance_company'
              name='insurance_company'
              required
              value={insuranceCompany}
              onChange={(e) => setInsuranceCompany(e.target.value)}
            ></input>
          </section>

          {/* text-box-company-license-number */}
          <section className='input--text'>
            <label className='label' htmlFor='license_number'>
              Company License Number
            </label>
            <input
              type='text'
              id='license_number'
              name='license_number'
              required
              value={licenseNumber}
              onChange={(e) => setLicenseNumber(e.target.value)}
            ></input>
          </section>

          {/* text-box-company-vat-number */}
          <section className='input--text'>
            <label className='label' htmlFor='vat_number'>
              Company VAT Registered Number
            </label>
            <input
              type='text'
              id='vat_number'
              name='vat_number'
              required
              value={vatNumber}
              onChange={(e) => setVatNumber(e.target.value)}
            ></input>
          </section>

          {/* text-box-company-address */}
          <section className='input--text'>
            <label className='label' htmlFor='address'>
              Company Address
            </label>
            <input
              type='text'
              id='address'
              name='address'
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></input>
          </section>

          {/* text-box-company-contact */}
          <section className='input--text'>
            <label className='label' htmlFor='contact'>
              Company Contact
            </label>
            <input
              type='text'
              id='contact'
              name='contact'
              required
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            ></input>
          </section>

          {/* text-box-company-email */}
          <section className='input--text'>
            <label className='label' htmlFor='email'>
              Company email
            </label>
            <input
              type='text'
              id='email'
              name='email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </section>
        </section>
        {/* file-box-container */}
        <section className='company-file-box'>
          {/* input-file-company-vat */}
          <section className='input--file'>
            <BiLinkAlt className='file-icon' />{' '}
            <label htmlFor='vat-file' className='label-file label-vat'>
              {vatFile}
            </label>
            {vatLoader && <VscLoading className='loader loader-vat' />}
            {fileLoading && (
              <section className='tooltip-box'>
                <span className='tooltip tooltip-vat'>No files attached</span>
              </section>
            )}
            <input
              type='file'
              name='documents'
              onChange={(e) => uploadFileHandler(e, 'vat')}
              id='vat-file'
            />
          </section>

          {/* input-file-company-license */}
          <section className='input--file'>
            <BiLinkAlt className='file-icon' />{' '}
            <label htmlFor='license-file' className='label-file label-license'>
              {licenseFile}
            </label>
            {licenseLoader && <VscLoading className='loader loader-license' />}
            {fileLoading && (
              <section className='tooltip-box'>
                <span className='tooltip tooltip-license'>
                  No files attached
                </span>
              </section>
            )}
            <input
              type='file'
              name='documents'
              onChange={(e) => uploadFileHandler(e, 'license')}
              id='license-file'
            />
          </section>
        </section>
        <Button
          text='Register'
          classes='btn btn--primary btn--register'
          id='btn-company-register'
        />
      </form>
    </section>
  );
};

export default CompanyForm;
