import { Link } from "react-router-dom";
import { TriangleAlert, Home, ArrowLeft } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="min-h-1 bg-base-200 flex items-center justify-center py-5 ">
      <div className="max-w-4xl w-full">

        <div className="card bg-base-100 shadow-2xl border overflow-hidden">
          <div className="card-body p-10 text-center">

            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full bg-error/10 flex items-center justify-center">
                <TriangleAlert size={50} className="text-error" />
              </div>
            </div>

            {/* 404 */}
            <h1 className="text-9xl font-extrabold text-error tracking-widest">
              404
            </h1>

            {/* Title */}
            <h2 className="text-4xl font-bold mt-4">
              Lost in Space 🚀
            </h2>

            {/* Description */}
            <p className="text-gray-500 mt-4 max-w-xl mx-auto leading-relaxed">
              The page you are trying to reach might have been removed,
              renamed, or is temporarily unavailable.
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">

              <Link
                to="/"
                className="btn btn-primary gap-2"
              >
                <Home size={18} />
                Go Home
              </Link>

              <button
                onClick={() => window.history.back()}
                className="btn btn-outline gap-2"
              >
                <ArrowLeft size={18} />
                Go Back
              </button>

            </div>

            {/* Footer text */}
            <div className="mt-8 text-sm text-gray-400">
              Error Code: PAGE_NOT_FOUND
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ErrorPage;