import React from "react";
import style from "./Footer.module.scss";
import image from "../../assets/img/contact.png";
function Footer() {
  return (
    <footer className={style.container}>
      <img src={image} alt="contact" />
      <div className={style.contactBox}>
        <p>
          <b>İletişim</b><br /> Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka
          Merkezi D2 Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul
        </p>
        <br />
        <br />
        <p>Email: bilgi@tesodev.com</p>
      </div>
      <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.27974606925!2d28.88875941744385!3d41.0191353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb7abf29ba35%3A0xc98f44e9057adcde!2zVGVzb2RldiBZYXrEsWzEsW0gRG9uYW7EsW0gQmlsacWfaW0gQml5b21lZGlrYWwgS29uZ3JlIFR1cml6bSBFxJ9pdGltIERhbsSxxZ9tYW5sxLFrIExpbWl0ZWQgxZ5pcmtldGk!5e0!3m2!1str!2str!4v1661637252324!5m2!1str!2str" width="460" height="230" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </footer>
  );
}

export default Footer;
