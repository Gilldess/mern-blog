import {
  Footer,
  FooterTitle,
  FooterLink,
  FooterLinkGroup,
  FooterDivider,
  FooterCopyright,
  FooterIcon,
} from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
//  sudah selesai sampai mau pus

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-cyan-600">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="dark:text-white self-center whitespace-nowrap text-lg font-semibold sm:text-xl"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-sky-400 via-blue-500 to-yellow-500 rounded-lg text-white">
                Shope
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title="ABOUT" />
              <FooterLinkGroup col>
                <FooterLink target="_blank" rel="noopener noreferrer" href="#">
                  About
                </FooterLink>
                <FooterLink target="_blank" rel="noopener noreferrer" href="#">
                  Home
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="FOLLOW US" />
              <FooterLinkGroup col>
                <FooterLink target="_blank" rel="noopener noreferrer" href="#">
                  Github
                </FooterLink>
                <FooterLink target="_blank" rel="noopener noreferrer" href="#">
                  Discord
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="LEGAL" />
              <FooterLinkGroup col>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Tream &amp; Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright
            href="#"
            by="Dest Code"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon href="#" icon={BsTwitter} />
            <FooterIcon href="#" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
