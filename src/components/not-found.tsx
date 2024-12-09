import { File, Layers3 } from 'lucide-react';
import { BsChat } from 'react-icons/bs';
import { NavLink, useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-6">
      <h2 className="text-lg font-medium text-error-600 mb-2">404 hata</h2>
      <h1 className="text-5xl text-center font-bold text-gray-900 mb-4">Bu sayfayı kaybettik</h1>
      <p className="text-gray-500 mb-12 text-center max-w-md">
        Aradığınız sayfayı bulamadık. Sizi daha uygun bir yere yönlendirelim.
      </p>
      <div className="flex space-x-4 mb-24">
        <button onClick={handleGoBack}>Geri Dön</button>
        <button>
          <NavLink to="/">Anasayfaya Git</NavLink>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl w-full ">
        {/* //! Box */}
        <div className="flex flex-col bg-gray-50 gap-8 p-4 justify-between   shadow rounded-lg">
          <File className="text-brand-600" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Dokümantasyon</h3>
            <p className="text-sm text-gray-500 mb-2">Ürünümüz hakkında bilgi alın.</p>
            <NavLink to="/" className="text-brand-600 hover:underline text-sm font-medium">
              Başlayın →
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col  bg-gray-50 gap-8 p-4 justify-between   shadow rounded-lg">
          <Layers3 className="text-brand-600" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Tanımlar</h3>
            <p className="text-sm text-gray-500 mb-2">Tanımlar sayfasına git.</p>
            <NavLink to="/definitions/branches-list" className="text-brand-600 hover:underline text-sm font-medium">
              Git →
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col bg-gray-50 justify-between gap-8 p-4 shadow rounded-lg">
          <BsChat size={24} className="text-brand-600" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Chat</h3>
            <p className="text-sm text-gray-500 mb-2">Ekibimizle sohbet edin.</p>
            <NavLink to="/docs" className="text-brand-600 hover:underline text-sm font-medium">
              Başlayın →
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
