import Head from 'next/head';
import Header from './components/Header';
import Hero from './components/Hero';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <ContentSection
        title='Our Work'
        description='Learn more about our efforts to make the world a better place.'
        items={[
          {
            title: 'Education',
            content: 'Empowering youth through education.',
          },
          { title: 'Health', content: 'Improving global health for everyone.' },
          { title: 'Environment', content: 'Promoting sustainable practices.' },
        ]}
      />
      <Footer />
    </>
  );
}
