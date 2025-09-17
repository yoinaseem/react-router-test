import mvEmblem from "../../assets/mv-emblem.svg";
import { Link } from "react-router";
import { useAuth } from "~/contexts/AuthContext";

export function Header() {
  // Destructure the logout function from the context
  const { user, isLoading, logout } = useAuth();

  const renderAuthSection = () => {
    if (isLoading) {
      return null; // Don't show anything while loading
    }

    if (user) {
      // User is logged in: show email and logout button
      return (
        <div className="flex items-center gap-4">
          <span className="text-custom-gray text-lg">{user.email}</span>
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
          >
            Logout
          </button>
        </div>
      );
    }

    // User is not logged in: show login link
    return (
      <Link to="/login" className="text-custom-gray text-lg font-semibold">
        Login
      </Link>
    );
  };

  return (
    <header className="flex px-12 py-4 items-center shadow-sm/4 bg-white">
      {/* Logo and Name */}
      <div>
        <Link
          to="/"
          className="flex gap-4 font-sans font-semibold text-2xl items-center"
        >
          <img src={mvEmblem} alt="Maldives Emblem" className="w-10" />
          Ministry of Youth and Sports
        </Link>
      </div>

      {/* Nav Links */}
      <div className="absolute right-12">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-custom-gray text-2xl">
            Home
          </Link>

          {renderAuthSection()}
        </div>
      </div>
    </header>
  );
}
