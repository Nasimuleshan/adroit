function createUniversalFooter() {
  // Create the main footer container
  const footer = document.createElement('footer');
  footer.className = 'universal-footer';
  
  // Create the top section with contact info, company links, and social media
  const topSection = document.createElement('div');
  topSection.className = 'footer-top-section';
  
  // Column 1: Reach Us
  const reachUsColumn = document.createElement('div');
  reachUsColumn.className = 'footer-column';
  
  const reachUsHeading = document.createElement('h3');
  reachUsHeading.className = 'footer-heading l-purple';
  reachUsHeading.textContent = 'Reach Us';
  
  const contactList = document.createElement('ul');
  contactList.className = 'footer-contact-list';
  
  const phoneItem = document.createElement('li');
  const phoneLink = document.createElement('a');
  phoneLink.href = 'tel:+601113114015';
  phoneLink.innerHTML = '<i class="fas fa-phone-alt"></i> (+60)1113114015';
  phoneItem.appendChild(phoneLink);
  
  const emailItem = document.createElement('li');
  const emailLink = document.createElement('a');
  emailLink.className = 'footer-links a';
  emailLink.href = 'mailto:info@adroitconsultations.com';
  emailLink.innerHTML = '<i class="fas fa-envelope"></i> info@adroitconsultations.com';
  emailItem.appendChild(emailLink);
  
  contactList.appendChild(phoneItem);
  contactList.appendChild(emailItem);
  
  const address = document.createElement('p');
  address.className = 'footer-address light';
  address.innerHTML = '605 Woodside Dr <br>Iowa City <br>USA';
  
  reachUsColumn.appendChild(reachUsHeading);
  reachUsColumn.appendChild(contactList);
  reachUsColumn.appendChild(address);
  
  // Column 2: Company Links
  const companyColumn = document.createElement('div');
  companyColumn.className = 'footer-column';
  
  const companyHeading = document.createElement('h3');
  companyHeading.className = 'footer-heading l-purple';
  companyHeading.textContent = 'Company';
  
  const companyLinks = document.createElement('ul');
  companyLinks.className = 'footer-links';
  
  const links = [
    { text: 'Cookie Policy', href: 'cookie.html' },
    { text: 'Data Protection and Privacy Policy', href: 'Data.html' },
    { text: 'Right to Erasure Form', href: 'form.html', target: '_blank' },
    { text: 'Use of AI Policy', href: 'AI.html' }
  ];
  
  links.forEach(link => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;
    if (link.target) a.target = link.target;
    if (link.text.includes('Privacy Policy')) a.rel = 'privacy-policy';
    li.appendChild(a);
    companyLinks.appendChild(li);
  });
  
  companyColumn.appendChild(companyHeading);
  companyColumn.appendChild(companyLinks);
  
  // Column 3: Social Media
  const socialColumn = document.createElement('div');
  socialColumn.className = 'footer-column';
  
  const socialHeading = document.createElement('h3');
  socialHeading.className = 'footer-heading l-purple';
  socialHeading.textContent = 'Social';
  
  const socialIcons = document.createElement('div');
  socialIcons.className = 'footer-social-icons';
  
  const socialLinks = [
    { 
      href: 'https://www.linkedin.com/company/105660421/admin/page-posts/published/', 
      icon: './Resc_files/linkedin.png', 
      alt: 'LinkedIn Logo' 
    },
    { 
      href: 'https://www.researchgate.net/profile/Nasimul-Chowdhury?ev=hdr_xprf', 
      icon: './Resc_files/gate.png', 
      alt: 'ResearchGate Logo' 
    },
    { 
      href: 'https://www.facebook.com/profile.php?id=61575875011130', 
      icon: './Resc_files/facebook.png', 
      alt: 'Facebook Logo' 
    }
  ];
  
  socialLinks.forEach(link => {
    const a = document.createElement('a');
    a.href = link.href;
    a.target = '_blank';
    
    const img = document.createElement('img');
    img.src = link.icon;
    img.alt = link.alt;
    img.style.width = '40px';
    img.style.height = 'auto';
    
    a.appendChild(img);
    socialIcons.appendChild(a);
  });
  
  socialColumn.appendChild(socialHeading);
  socialColumn.appendChild(socialIcons);
  
  // Add columns to top section
  topSection.appendChild(reachUsColumn);
  topSection.appendChild(companyColumn);
  topSection.appendChild(socialColumn);
  
  // Create the copyright section
  const copyrightSection = document.createElement('div');
  copyrightSection.className = 'footer-copyright';
  
  const copyrightText = document.createElement('p');
  copyrightText.innerHTML = '&copy; adroitconsultations Limited 2025.';
  
  copyrightSection.appendChild(copyrightText);
  
  // Add sections to footer
  footer.appendChild(topSection);
  footer.appendChild(copyrightSection);
  
  // Add CSS styles
  const style = document.createElement('style');
  style.textContent = `
    .universal-footer {
      
	      font-family: Arial, sans-serif;
    color: #777194;
    background-color: #191919;
    backgroundColor: '#120d27'
      padding: 40px 20px 20px;
    }
	
    .li {text-align: center;}
	
    .footer-top-section {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 1200px;
      margin: 0 auto 30px;
    }
    
    .footer-column {
      flex: 1;
      min-width: 300px;
      margin-bottom: 20px;
      padding: 0 15px;
    }
    
    .footer-heading {
      color: #6a0dad;
      margin-bottom: 20px;
      font-size: 18px;
    }
    
    .footer-contact-list {
      list-style: none;
      padding: 0;
    }
    
    .footer-contact-list li {
      margin-bottom: 10px;
    text-align: center;
    }
    
    .footer-contact-list a {
	      color: #528df1;
    /* text-decoration: none; */
    display: flex;
    align-items: center;
    text-align: justify;
	justify-content: center;
    }
    
    .footer-contact-list i {
      margin-right: 10px;
      color: #6a0dad;
    }
    
    .footer-address {
      margin-top: 20px;
      line-height: 1.6;
	
    text-align: center;
    }
    
    .footer-links {
      list-style: none;
      padding: 0;
	      color: #528df1;
    text-align: center;
    text-decoration: none;
    }
    
    .footer-links li {
      margin-bottom: 10px;
    }
    
    .footer-links a {
          color: #528df1;
    text-align: center;
      text-decoration: none;
	  justify-content: center;
    }
    
    .footer-links a:hover {
      text-decoration: underline;
    }
    
    .footer-social-icons {
      display: flex;
      gap: 15px;
    text-align: center;
    align-items: center;
    justify-content: center;
    }
    
    .footer-social-icons a {
      display: inline-block;
      transition: transform 0.3s;
    }
    
    .footer-social-icons a:hover {
      transform: scale(1.1);
    }
    
    .footer-copyright {
      text-align: center;
      padding: 20px 0;
      border-top: 1px solid #ddd;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .light {
	  color: '#badcea'
    }
    
    .l-purple {
     padding-top: 50px;
	      color: #a5d1eb;
    font-size: x-large;
    font-variant-position: super;
    text-align: center;
    }
    
    @media (max-width: 768px) {
      .footer-column {
        flex: 100%;
        margin-bottom: 30px;
      }
    }
  `;
  
  // Append style to head
  document.head.appendChild(style);
  
  // Return the footer element
  return footer;
}

// Usage: Add the footer to your page
document.addEventListener('DOMContentLoaded', function() {
  const footer = createUniversalFooter();
  document.body.appendChild(footer);
  
  // Load Font Awesome if not already loaded
  if (!document.querySelector('link[href*="font-awesome"]')) {
    const faLink = document.createElement('link');
    faLink.rel = 'stylesheet';
    faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
    document.head.appendChild(faLink);
  }
});
