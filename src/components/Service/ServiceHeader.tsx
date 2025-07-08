import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBannersByPage } from '../../api/banner';

interface Banner {
  id: number;
  title: string;
  image: string;
  page: string;
  status: string;
}

const ServiceHeader: React.FC = () => {
  const [bgImage, setBgImage] = useState<string | null>(null);
  const fallbackImage = '/img/AEIRC_Gallery/gallery1.jpg';

  useEffect(() => {
    async function getServiceBanner() {
      try {
        const data = await fetchBannersByPage("services");
        const banner: Banner = data.find((b: Banner) =>  b.page === 'services' && b.status === 'active');

        if (banner?.image) {
          const BASE_URL = import.meta.env.VITE_BASE_URL;
          const fullImageUrl = banner.image.startsWith('/storage/')
            ? `${BASE_URL}${banner.image}`
            : `${BASE_URL}/storage/${banner.image}`;
          setBgImage(fullImageUrl);
        }
      } catch (error) {
        console.error('Error fetching banner:', error);
      }
    }

    getServiceBanner();
  }, []);

  return (
    <div
      className="container-fluid bg-site-primary py-5 mb-5"
      style={{
        backgroundImage: `linear-gradient(rgba(24, 29, 56, 0.7), rgba(24, 29, 56, 0.7)), url(${bgImage || fallbackImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <h1 className="display-3 text-white animated slideInDown">Our Services</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <Link className="text-white" to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <span className="text-white">Pages</span>
                </li>
                <li className="breadcrumb-item text-white active" aria-current="page">
                  Services
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHeader;
