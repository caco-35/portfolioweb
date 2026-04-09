import CertificatesCard from "./CertificatesCard"
import CertificadoDesarrolloweb from '../assets/images/certificates/crtificadoDesarrolloweb.jpg'
import CertificadoJSYJQ from '../assets/images/certificates/JSYJQ.jpg'
import CertificadoReactRedux from '../assets/images/certificates/ReactJSyRedux.jpg'
import CertificadoJavaScriptFlex from '../assets/images/certificates/CertificadoJavaScriptFlex.png'


const certificates = [
    {
        imgSrc: CertificadoDesarrolloweb,
        title: 'Desarrollo Web Flex',
        tags: ['CoderHouse'],
        certificateLink: CertificadoDesarrolloweb
      },
      {
        imgSrc: CertificadoJSYJQ,
        title: 'JavaScript & jQuery',
        tags: ['Udemy'],
        certificateLink: CertificadoJSYJQ
      },
      {
        imgSrc: CertificadoReactRedux,
        title: 'ReactJS + Redux',
        tags: ['Udemy'],
        certificateLink: CertificadoReactRedux
      },
      {
        imgSrc: CertificadoJavaScriptFlex,
        title: 'JavaScript Flex',
        tags: ['CoderHouse'],
        certificateLink: CertificadoJavaScriptFlex
      }
]

const Certificates = () => {
    return (
      <section id="certificates" className="section">
          <div className="container">
              <h2 className="headline-2 mb-8 reveal-up">Certificaciones:</h2>
              <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                  {certificates.map(({ imgSrc, title, tags, certificateLink}) => (
                      <CertificatesCard key={title} imgSrc={imgSrc} title={title} tags={tags} certificateLink={certificateLink} className="reveal-up" />
                  ))}
              </div>
          </div>
      </section>
    )
  }
  
  export default Certificates