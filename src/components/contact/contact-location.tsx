import React from "react";

// data
const location_data = [
  {
    id: 1,
    country: "Jakarta, Indonesia",
    location_title: "Office Location",
    address: "Jl. Arteri Permata Hijau No.11, RT.11/RW.10, <br /> Grogol Utara, Kec. Kebayoran Lama, <br /> Kota Jakarta Selatan 12210",
    phone: "+6285175251338",
    email: "yehezkielkristamaputra@gmail.com",
    mapUrl: "https://www.google.com/maps/place/Jl.+Arteri+Permata+Hijau+No.11,+RT.11%2FRW.10,+Grogol+Utara,+Kec.+Kebayoran+Lama,+Kota+Jakarta+Selatan,+Daerah+Khusus+Ibukota+Jakarta+12210",
    mapEmbed: "https://maps.google.com/maps?q=Jl.+Arteri+Permata+Hijau+No.11,+RT.11/RW.10,+Grogol+Utara,+Kec.+Kebayoran+Lama,+Kota+Jakarta+Selatan+12210&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
];

const ContactLocation = () => {
  return (
    <div className="cn-contact-info-area">
      <div className="container container-1840">
        <div className="cn-contact-info-bg black-bg">
          {location_data.map((item) => (
            <div key={item.id} className="cn-contact-info-item">
              <div className="row">
                <div className="col-xl-12">
                  <div className="cn-contact-location-wrapper">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="cn-contact-left-section">
                          <h4 className="cn-contact-left-title mb-2">{item.country}</h4>
                          <div className="cn-contact-map-link mb-3">
                            <span className="cn-contact-map-text" style={{ color: 'white' }}>Google Maps</span>
                          </div>
                          <div className="cn-contact-map-visual mb-4">
                            <iframe 
                              src="https://www.google.com/maps?q=Jl.+Arteri+Permata+Hijau+No.11,+RT.11/RW.10,+Grogol+Utara,+Kec.+Kebayoran+Lama,+Kota+Jakarta+Selatan+12210&output=embed"
                              width="100%" 
                              height="300" 
                              style={{ border: 0, borderRadius: '8px' }} 
                              allowFullScreen={true}
                              loading="lazy" 
                              referrerPolicy="no-referrer-when-downgrade"
                              title="Office Location Map"
                            ></iframe>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="cn-contact-right-wrap">
                          <div className="cn-contact-info-grid">
                            <div className="cn-contact-location mb-4">
                              <span className="cn-contact-location-title" style={{ display: 'block', marginBottom: '12px' }}>
                                {item.location_title}
                              </span>
                              <a
                                href={item.mapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                dangerouslySetInnerHTML={{ __html: item.address }}
                              ></a>
                            </div>
                            
                            <div className="cn-contact-phone mb-3">
                              <span className="cn-contact-info-title" style={{ display: 'block', marginBottom: '12px', color: 'white' }}>
                                <i className="fa-solid fa-phone" style={{ marginRight: '8px', color: 'white' }}></i>
                                Phone
                              </span>
                              <a href={`tel:${item.phone}`} style={{ color: 'white' }}>{item.phone}</a>
                            </div>
                            
                            <div className="cn-contact-email">
                              <span className="cn-contact-info-title" style={{ display: 'block', marginBottom: '12px', color: 'white' }}>
                                <i className="fa-solid fa-envelope" style={{ marginRight: '8px', color: 'white' }}></i>
                                Email
                              </span>
                              <a href={`mailto:${item.email}`} style={{ color: 'white' }}>{item.email}</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactLocation;
