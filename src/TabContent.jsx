import React from 'react';

const Html5Icon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1_116)">
    <path fillRule="evenodd" clipRule="evenodd" d="M1.13934 0L2.74416 17.9997L9.94631 20L17.168 17.998L18.7761 0H1.13934ZM15.2816 5.88867H6.83433L7.03615 8.14941H15.0814L14.4759 14.9268L9.94794 16.1816L5.42483 14.9268L5.11558 11.4583H7.33238L7.49025 13.221L9.94956 13.8835L9.95445 13.8818L12.4138 13.2178L12.6693 10.3548H5.01792L4.42385 3.67839H15.4818L15.2816 5.88867Z" fill="currentColor" fillOpacity="0.8"/>
    </g>
    <defs>
    <clipPath id="clip0_1_116">
    <rect width="17.6367" height="20" fill="white" transform="translate(1.13934)"/>
    </clipPath>
    </defs>
  </svg>
);

const NextJsNewIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.29752 7.5C3.10002 8.06667 1.66669 9.0375 1.66669 10.1458C1.66669 11.9017 5.33752 13.3333 9.87502 13.3333C10.4917 13.3333 10.925 13.3008 11.5 13.2525" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.19751 13.2499C7.85335 12.7533 7.52585 12.3058 7.21418 11.7499C4.92168 7.66661 4.30751 3.60827 5.85585 2.68911C6.81418 2.10827 8.39501 2.89994 10.0008 4.56744" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.35752 12.8225C4.77252 15.0625 4.89085 16.7525 5.82418 17.3183C7.31002 18.2183 10.3134 15.6867 12.5267 11.6483C12.8267 11.09 13.0959 10.5408 13.3334 10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 15.4333C11.6067 17.1 13.1808 17.8917 14.1483 17.3108C15.69 16.3925 15.0825 12.3342 12.7875 8.25C12.4675 7.68583 12.14 7.24667 11.8042 6.75" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.7167 12.5C16.8933 11.9275 18.3333 10.9583 18.3333 9.85329C18.3333 8.09496 14.66 6.66663 10.1292 6.66663C9.50667 6.66663 9.07417 6.69079 8.5 6.73913" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.66669 10C6.90419 9.45004 7.17252 8.91004 7.47335 8.35171C9.67919 4.31504 12.6842 1.77671 14.1784 2.68421C15.1034 3.25004 15.23 4.93921 14.645 7.17838" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.2166 10.0125H10.2083C10.2 10.1209 10.1083 10.2125 9.99165 10.2125C9.87581 10.2068 9.78449 10.1118 9.78331 9.99587C9.78331 9.87921 9.87498 9.78754 9.98331 9.78754H9.97498C10.0833 9.77921 10.1833 9.87921 10.1833 9.98754" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckmarkIcon = () => (
  <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.25 0C12.3685 0 12.4801 0.0250651 12.585 0.0751953C12.6898 0.120768 12.7809 0.18457 12.8584 0.266602C12.9404 0.344076 13.0042 0.435221 13.0498 0.540039C13.0999 0.644857 13.125 0.75651 13.125 0.875C13.125 1.12109 13.0407 1.32845 12.8721 1.49707L5.65332 8.71582C5.4847 8.88444 5.27734 8.96875 5.03125 8.96875C4.78516 8.96875 4.5778 8.88444 4.40918 8.71582L0.25293 4.55957C0.0843099 4.39095 0 4.18359 0 3.9375C0 3.81901 0.0227865 3.70736 0.0683594 3.60254C0.11849 3.49772 0.182292 3.40658 0.259766 3.3291C0.341797 3.24707 0.435221 3.18327 0.540039 3.1377C0.649414 3.08756 0.761068 3.0625 0.875 3.0625C1.12109 3.0625 1.32845 3.14681 1.49707 3.31543L5.03125 6.85645L11.6279 0.25293C11.7965 0.0843099 12.0039 0 12.25 0Z" fill="currentColor"/>
  </svg>
);


const TabContent = ({ activeTab }) => {
  return (
    <div className="modal-body">
      {activeTab === 'HTML & CSS' && (
        <>
          <div className="export-info">
            <span><Html5Icon /> Export as HTML & CSS</span>
            <span className="zipped-badge">Zipped</span>
          </div>
          <div className="checkbox-container">
            <label>
              <input type="checkbox" defaultChecked />
              <span className="custom-checkbox"><CheckmarkIcon /></span>
              Include assets (images, styles, fonts, etc.)
            </label>
            <label>
              <input type="checkbox" defaultChecked />
              <span className="custom-checkbox"><CheckmarkIcon /></span>
              Include custom code
            </label>
          </div>
        </>
      )}

      {activeTab === 'Next JS' && (
        <>
          <div className="export-info">
            <span><NextJsNewIcon /> Export as Next JS Project</span>
            <span className="zipped-badge">Zipped</span>
          </div>
          <div className="checkbox-container">
            <label>
              <input type="checkbox" defaultChecked />
              <span className="custom-checkbox"><CheckmarkIcon /></span>
              Use 'app' directory (NextJS v13+)
            </label>
            <label>
              <input type="checkbox" defaultChecked />
              <span className="custom-checkbox"><CheckmarkIcon /></span>
              Include assets locally (images, styles, fonts, etc.)
            </label>
            <label>
              <input type="checkbox" defaultChecked />
              <span className="custom-checkbox"><CheckmarkIcon /></span>
              Include custom code
            </label>
          </div>
        </>
      )}
    </div>
  );
};

export default TabContent;