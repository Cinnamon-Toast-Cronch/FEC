// import { Cloudinary } from '@cloudinary/url-gen';
import React from 'react';

const UPLOAD_PRESET = 'FEC_Cronch';
const CLOUD_NAME = 'dtnlyldts';
const WIDGET_CONFIG = {
  cloudName: CLOUD_NAME,
  uploadPreset: UPLOAD_PRESET,
  sources: ['local'],
  multiple: false,
  clientAllowedFormats: ['jpg', 'jpeg', 'gif', 'png'],
};

function ReviewImageUpload({ addImage }) {
  const uploadWidget = window.cloudinary.createUploadWidget(
    WIDGET_CONFIG,
    (err, result) => {
      if (!err && result && result.event === 'success') {
        addImage(result.info.secure_url);
      }
    }
  );

  return (
    <button type="button" onClick={() => uploadWidget.open()}>
      Upload
    </button>
  );
}

export default ReviewImageUpload;
