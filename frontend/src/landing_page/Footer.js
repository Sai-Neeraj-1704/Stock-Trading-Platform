import React from "react";

function Footer() {
  return (
    <footer
      className="border-top pb-5"
      style={{ backgroundColor: "rgb(250,250,250)" }}
    >
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col">
            <img
              src="/media/images/logo.svg"
              alt="Logo"
              style={{ width: "50%" }}
            />

            <p className="text-muted mt-3">
              &copy; 2010 - 2024, Not Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>

            <div className="mt-3 fs-5 text-muted">
              <i className="fa-brands fa-x-twitter me-3"></i>
              <i className="fa-brands fa-facebook me-3"></i>
              <i className="fa-brands fa-instagram me-3"></i>
              <i className="fa-brands fa-linkedin-in me-3"></i>
              <i className="fa-brands fa-telegram"></i>
            </div>
          </div>

          <div className="col">
            <p className="fw-bold">Company</p>

            <a href="#" className="text-muted text-decoration-none d-block mb-3">
              About
            </a>

            <a href="#" className="text-muted text-decoration-none d-block mb-3">
              Products
            </a>

            <a href="#" className="text-muted text-decoration-none d-block mb-3">
              Pricing
            </a>

            <a href="#" className="text-muted text-decoration-none d-block mb-3">
              Referral programme
            </a>

            <a href="#" className="text-muted text-decoration-none d-block mb-3">
              Careers
            </a>

            <a href="#" className="text-muted text-decoration-none d-block mb-3">
              Zerodha.tech
            </a>

            <a href="#" className="text-muted text-decoration-none d-block mb-3">
              Press & media
            </a>

            <a href="#" className="text-muted text-decoration-none d-block mb-3">
              Zerodha cares (CSR)
            </a>
          </div>

          <div className="col">
            <p className="fw-bold">Support</p>

            <a href="#" className="text-muted text-decoration-none d-block mb-3">
              Contact
            </a>

            <a href="#" className="text-muted text-decoration-none d-block mb-3">
              Support portal
            </a>

            <a href="#" className="text-muted text-decoration-none d-block mb-3">
              Z-Connect blog
            </a>

            <a href="#" className="text-muted text-decoration-none d-block mb-3">
              List of charges
            </a>

            <a href="#" className="text-muted text-decoration-none d-block mb-3">
              Downloads & resources
            </a>
          </div>

          <div className="col">
            <p className="fw-bold">Account</p>

            <a href="#" className="text-muted text-decoration-none d-block mb-3">
              Open an account
            </a>

            <a href="#" className="text-muted text-decoration-none d-block mb-3">
              Fund transfer
            </a>

            <a href="#" className="text-muted text-decoration-none d-block mb-3">
              60 day challenge
            </a>
          </div>
        </div>

        <div
          className="mt-5 text-muted"
          style={{ fontSize: "12px", lineHeight: "1.8" }}
        >
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
            INZ000031633. CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-431-2019. Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI
            Registration no.: INZ000038238. Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@zerodha.com. For details, ensure you carefully
            read the Risk Disclosure Document as prescribed by SEBI | ICF.
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances.
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets – once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary."
          </p>

          <p>
            Dear Investor, if you are subscribing to an IPO, there is no need
            to issue a cheque. Please write the bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non-allotment the funds will remain in your
            bank account. As a business, we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>

          <div
            className="text-center mt-4"
            style={{ fontSize: "12px" }}
          >
            <a href="#" className="text-decoration-none me-4 text-primary">
              NSE
            </a>

            <a href="#" className="text-decoration-none me-4 text-primary">
              BSE
            </a>

            <a href="#" className="text-decoration-none me-4 text-primary">
              MCX
            </a>

            <a href="#" className="text-decoration-none me-4 text-primary">
              Terms & Conditions
            </a>

            <a href="#" className="text-decoration-none me-4 text-primary">
              Policies & Procedures
            </a>

            <a href="#" className="text-decoration-none me-4 text-primary">
              Privacy Policy
            </a>

            <a href="#" className="text-decoration-none text-primary">
              Disclosure
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;  