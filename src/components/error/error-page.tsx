"use client";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <section className="tp-error-area pt-110 pb-110">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="tp-error-content text-center">
              <div className="tp-error-thumb mb-45">
                <h1 style={{ fontSize: "150px", fontWeight: "bold", color: "#000" }}>404</h1>
              </div>
              <h3 className="tp-error-title">Page Not Found</h3>
              <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
              <Link href="/" className="tp-btn mt-40">
                Back To Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
