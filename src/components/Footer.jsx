import { useTranslation } from "react-i18next";
import logo from "../assets/images/logo-new.png";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <span className="ml-2 text-xl font-bold tracking-wide text-light uppercase">
              <img src={logo} alt="logo" className="w-40" />
            </span>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-light">
              {t("executive_summary_second")}
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-white">
            {t("contact")}
          </p>
          <div className="flex">
            <p className="mr-1 text-light">{t("landline")}:</p>
            <a
              href={`tel:${t("landline_number")}`}
              aria-label="Our landline"
              title="Our landline"
              className="transition-colors duration-300 text-light hover:text-light-gold"
            >
              {t("landline_number")}
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-light">{t("phone")}:</p>
            <a
              href={`tel:${t("phone_number")}`}
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-light hover:text-light-gold"
            >
              {t("phone_number")}
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-white">{t("email")}:</p>
            <a
              href={`mailto:${t("email_address")}`}
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-light hover:text-light-gold"
            >
              {t("email_address")}
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-white">{t("address_title")}:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-light hover:text-light-gold"
            >
              {t("address")}
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-white">
            {t("social")}
          </span>
          <div className="flex items-center mt-1 gap-3">
            <a
              href={"https://wa.me/" + t("whatsapp")}
              className="text-gray-200 transition-colors duration-300 hover:text-green-500"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-7">
                <path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"></path>
              </svg>
            </a>
            <a
              href={t("instagram")}
              className="text-gray-200 transition-colors duration-300 hover:text-orange-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href={t("facebook")}
              className="text-gray-200 transition-colors duration-300 hover:text-sky-700"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-300">{t("follow_us")}</p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-300">
          © Copyright 2022 A.I.M Inc. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            {/* <a
              href="/"
              className="text-sm text-gray-300 transition-colors duration-300 hover:text-light-gold"
            >
              F.A.Q
            </a> */}
          </li>
        </ul>
      </div>
    </div>
  );
};
