import { Metadata } from 'next';
import Wrapper from '@/layouts/wrapper';
import HeaderEleven from '@/layouts/headers/header-eleven';
import FooterFour from '@/layouts/footers/footer-four';
import ErrorPage from '@/components/error/error-page';
 
export const metadata: Metadata = {
  title: "OURA Studios - Page Not Found",
};

export default function NotFound() {
  return (
    <Wrapper>
      <HeaderEleven />
      <ErrorPage />
      <FooterFour />
    </Wrapper>
  )
}
