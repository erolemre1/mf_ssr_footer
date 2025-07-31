import React from "react";
import styles from "./Footer.module.css";

const services = [
  {
    img: "//dfcdn.defacto.com.tr/AssetsV2/dist/img/footer/magazadanteslimal.svg",
    alt: "Mağazadan Teslim Al",
    title: "Mağazadan Teslim Al",
    subTitle: "Kargo Bedava",
    link: "/statik/bi-tikla-magazada",
  },
  {
    img: "//dfcdn.defacto.com.tr/AssetsV2/dist/img/footer/kapidaodeme.svg",
    alt: "Kapıda ödeme",
    title: "Kapıda ödeme",
    subTitle: "Hizmet bedeli sadece 29,99 TL",
    link: "/statik/kapida-nakit-odeme",
  },
  {
    img: "//dfcdn.defacto.com.tr/AssetsV2/dist/img/footer/magazadandegisim.svg",
    alt: "Mağazada Değişim",
    title: "Mağazada Değişim & İade",
    subTitle: "Online al mağazada değiştir",
    link: "/statik/iade-degisim-islemleri",
  },
  {
    img: "//dfcdn.defacto.com.tr/AssetsV2/dist/img/footer/iade.svg",
    alt: "Ücretsiz iade",
    title: "Ücretsiz iade",
    subTitle: "30 gün içerisinde iade et",
    link: "/statik/iade-degisim-islemleri",
  },
  {
    img: "//dfcdn.defacto.com.tr/AssetsV2/dist/img/footer/gift.svg",
    alt: "GiftClub",
    title: "DeFacto Gift Club",
    subTitle: "Ayrıcalıklarla Yenilen, Eğlen, Devam Et!",
    link: "/giftclub",
  },
];

const footerData = [
  {
    title: "DeFacto",
    items: [
      { label: "Kurumsal", href: "https://kurumsal.defacto.com.tr" },
      { label: "Hakkımızda", href: "https://kurumsal.defacto.com.tr/hakkimizda.html" },
      { label: "İnsan Kaynakları", href: "https://kurumsal.defacto.com.tr/defactoda-hayat.html" },
      { label: "Kurumsal Satış", href: "/statik/hediye-cekleri", hideOnKiosk: true },
      { label: "Toptan Satış (Wholesale Partner)", href: "/statik/toptan-satis", hideOnKiosk: true },
      { label: "DeFacto Teknoloji", href: "https://www.defactoteknoloji.com.tr/" },
      { label: "Sitemap", href: "/statik/sitemap" },
      {
        label: (
          <>
            DeFacto Blog
            <span className={styles.newTag}>YENİ</span>
          </>
        ),
        href: "https://www.defacto.com.tr/blog",
      },
    ],
  },
  {
    title: "Yardım",
    items: [
      { label: "Sıkça Sorulan Sorular", href: "/statik/sikca-sorulan-sorular" },
      {
        label: (
          <>
            <img src="//dfcdn.defacto.com.tr/responsive/icon.png" alt="icon" width="16" height="16" />
            &nbsp; Siparişimi Nasıl Takip Ederim?
          </>
        ),
        href: "/statik/siparis-takip",
      },
      {
        label: (
          <>
            <img src="//dfcdn.defacto.com.tr/responsive/icon.png" alt="icon" width="16" height="16" />
            &nbsp; Nasıl İade Ederim?
          </>
        ),
        href: "/statik/iade-degisim-islemleri",
      },
      { label: "Yenilikler", href: "https://www.defacto.com.tr/yenilikler" },
      { label: "Gift Club Sıkça Sorulan Sorular", href: "https://www.defacto.com.tr/giftclub/sikca-sorulan-sorular" },
      { label: "İşlem Rehberi", href: "/statik/islem-rehberi" },
      { label: "Kampanyalar", href: "/statik/kampanyalar" },
      { label: "Kişisel Verilerin Korunması ve Gizlilik", href: "/statik/gizlilik-politikasi", hideOnKiosk: true },
    ],
  },
  {
    title: "Bize Ulaşın",
    items: [
      { label: "Mağazalarımız", href: "/magazalar" },
      { label: "İletişim Formu", href: "/kurumsal/iletisim" },
      {
        label: (
          <>
            Müşteri Hizmetleri<br />
            <a href="tel:08503332286">0850 333 22 86</a>
          </>
        ),
        href: null,
      },
    ],
  },
];

const socialLinks = [
  {
    href: "https://whatsapp.com/channel/0029VajNiMhLY6dAahyDU824",
    label: "WhatsApp",
    icon: "#icon-social-whatsapp",
  },
  {
    href: "https://www.facebook.com/DeFacto/",
    label: "Facebook",
    icon: "#icon-social-facebook",
  },
  {
    href: "https://x.com/defacto",
    label: "Twitter",
    icon: "#icon-social-x",
  },
  {
    href: "https://www.instagram.com/defacto/",
    label: "Instagram",
    icon: "#icon-social-instagram",
  },
  {
    href: "https://www.tiktok.com/@defacto?lang=tr-TR",
    label: "Tiktok",
    icon: "#icon-social-tiktok",
  },
];

export default function FooterServices() {
    if (typeof window === 'undefined') return null;
  return (
  <div>
      <div className={styles.container}>
      <div className={styles.footerServices}>
        {services.map((item, idx) => (
          <div
            className={styles.footerItem}
            key={idx}
          >
            <div className={styles.flex}>
              <img
                src={item.img}
                alt={item.alt}
                width={41}
                height={41}
                loading="lazy"
              />
              <div>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.subTitle}>{item.subTitle}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

     <div className={styles.container}>
      <div className={styles.accordion}>
        {footerData.map((section, index) => (
          <div className={styles.accordionItem} key={index}>
            <div className={styles.accordionTitle}>{section.title}</div>
            <div className={styles.accordionContent}>
              <ul className={styles.footerNav}>
                {section.items.map((item, idx) => (
                  <li key={idx} className={item.hideOnKiosk ? styles.hideOnKiosk : ""}>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer">
                        {item.label}
                      </a>
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
           <div className={styles.socialWrapper}>
      <div className={styles.accordionItem}>
        <div className={styles.accordionTitle}>Takip Edin</div>
        <div className={`${styles.accordionContent} ${styles.active}`}>
       <ul className={styles.socialIcons}>
  <li>
    <a
      href="https://whatsapp.com/channel/0029VajNiMhLY6dAahyDU824"
      aria-label="WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
      
    >
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24">
<path d="M 12 2 C 6.5 2 2 6.5 2 12 C 2 13.8 2.5007813 15.5 3.3007812 17 L 2 22 L 7.1992188 20.800781 C 8.6992188 21.600781 10.3 22 12 22 C 17.5 22 22 17.5 22 12 C 22 9.3 20.999609 6.8003906 19.099609 4.9003906 C 17.199609 3.0003906 14.7 2 12 2 z M 12 4 C 14.1 4 16.099219 4.8007813 17.699219 6.3007812 C 19.199219 7.9007813 20 9.9 20 12 C 20 16.4 16.4 20 12 20 C 10.7 20 9.2992188 19.7 8.1992188 19 L 7.5 18.599609 L 6.8007812 18.800781 L 4.8007812 19.300781 L 5.3007812 17.5 L 5.5 16.699219 L 5.0996094 16 C 4.3996094 14.8 4 13.4 4 12 C 4 7.6 7.6 4 12 4 z M 8.5 7.4003906 C 8.3 7.4003906 8.0007812 7.3992188 7.8007812 7.6992188 C 7.5007813 7.9992188 6.9003906 8.6007813 6.9003906 9.8007812 C 6.9003906 11.000781 7.8003906 12.200391 7.9003906 12.400391 C 8.1003906 12.600391 9.6992188 15.199219 12.199219 16.199219 C 14.299219 16.999219 14.699219 16.800781 15.199219 16.800781 C 15.699219 16.700781 16.700391 16.199609 16.900391 15.599609 C 17.100391 14.999609 17.099219 14.499219 17.199219 14.199219 C 17.099219 14.099219 16.999219 14.000391 16.699219 13.900391 C 16.499219 13.800391 15.3 13.199609 15 13.099609 C 14.7 12.999609 14.600391 12.899219 14.400391 13.199219 C 14.200391 13.499219 13.699609 13.999219 13.599609 14.199219 C 13.499609 14.399219 13.399609 14.400781 13.099609 14.300781 C 12.899609 14.200781 12.099609 13.999609 11.099609 13.099609 C 10.299609 12.499609 9.7992187 11.700391 9.6992188 11.400391 C 9.4992187 11.200391 9.7007813 11.000391 9.8007812 10.900391 L 10.199219 10.5 C 10.299219 10.4 10.300391 10.199609 10.400391 10.099609 C 10.500391 9.9996094 10.500391 9.8992188 10.400391 9.6992188 C 10.300391 9.4992187 9.7996094 8.3007812 9.5996094 7.8007812 C 9.3996094 7.4007812 9.2 7.4003906 9 7.4003906 L 8.5 7.4003906 z"></path>
</svg>
    </a>
  </li>
  <li>
    <a
      href="https://www.facebook.com/DeFacto/"
      aria-label="Facebook"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
    <path d="M12,27V15H8v-4h4V8.852C12,4.785,13.981,3,17.361,3c1.619,0,2.475,0.12,2.88,0.175V7h-2.305C16.501,7,16,7.757,16,9.291V11 h4.205l-0.571,4H16v12H12z"></path>
</svg>
    </a>
  </li>
  <li>
    <a
      href="https://x.com/defacto"
      aria-label="Twitter"
      target="_blank"
      rel="noopener noreferrer"
    >
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
<path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
</svg>
    </a>
  </li>
  <li>
    <a
      href="https://www.instagram.com/defacto/"
      aria-label="Instagram"
      target="_blank"
      rel="noopener noreferrer"
    >
     <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
    <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
</svg>
    </a>
  </li>
  <li>
    <a
      href="https://www.tiktok.com/@defacto?lang=tr-TR"
      aria-label="Tiktok"
      target="_blank"
      rel="noopener noreferrer"
    >
<svg className={styles.tiktok} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
<path d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 12 7 L 14 7 C 14 8.005 15.471 9 16 9 L 16 11 C 15.395 11 14.668 10.734156 14 10.285156 L 14 14 C 14 15.654 12.654 17 11 17 C 9.346 17 8 15.654 8 14 C 8 12.346 9.346 11 11 11 L 11 13 C 10.448 13 10 13.449 10 14 C 10 14.551 10.448 15 11 15 C 11.552 15 12 14.551 12 14 L 12 7 z"></path>
</svg>
    </a>
  </li>
</ul>

        </div>
      </div>
      <div className={styles.countrySwitcher}>
<img   src="https://cdn-icons-png.flaticon.com/256/921/921439.png"
      alt="World"
      width={20}
      height={20}/>

        <a href="/countries">Ülke Değiştir</a>
      </div>
    </div>
      </div>
    </div>
    
  </div>
  );
}
