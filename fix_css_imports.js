const fs = require('fs');
const path = require('path');

const services = ['Designing', 'Development', 'DigitalMarketing', 'Ecommerce'];
const fixes = [
    { target: /Designingabout\.css/g, replace: 'BrandingAbout.css' },
    { target: /Developmentabout\.css/g, replace: 'BrandingAbout.css' },
    { target: /DigitalMarketingabout\.css/g, replace: 'BrandingAbout.css' },
    { target: /Ecommerceabout\.css/g, replace: 'BrandingAbout.css' },
    
    { target: /DesigningFramework\.css/g, replace: 'FrameworkSection.css' },
    { target: /DevelopmentFramework\.css/g, replace: 'FrameworkSection.css' },
    { target: /DigitalMarketingFramework\.css/g, replace: 'FrameworkSection.css' },
    { target: /EcommerceFramework\.css/g, replace: 'FrameworkSection.css' },
    
    { target: /DesigningPackages\.css/g, replace: 'BrandingPackages.css' },
    { target: /DevelopmentPackages\.css/g, replace: 'BrandingPackages.css' },
    { target: /DigitalMarketingPackages\.css/g, replace: 'BrandingPackages.css' },
    { target: /EcommercePackages\.css/g, replace: 'BrandingPackages.css' },
    
    { target: /DesigningCaseStudies\.css/g, replace: 'BrandingCaseStudies.css' },
    { target: /DevelopmentCaseStudies\.css/g, replace: 'BrandingCaseStudies.css' },
    { target: /DigitalMarketingCaseStudies\.css/g, replace: 'BrandingCaseStudies.css' },
    { target: /EcommerceCaseStudies\.css/g, replace: 'BrandingCaseStudies.css' },
    
    { target: /WhyChooseDesigning\.css/g, replace: 'WhyChooseBranding.css' },
    { target: /WhyChooseDevelopment\.css/g, replace: 'WhyChooseBranding.css' },
    { target: /WhyChooseDigitalMarketing\.css/g, replace: 'WhyChooseBranding.css' },
    { target: /WhyChooseEcommerce\.css/g, replace: 'WhyChooseBranding.css' },
    
    // Also Bradingabount to BrandingAbout if any mismatch happened
    { target: /Bradingabount\.css/g, replace: 'BrandingAbout.css' }
];

services.forEach(service => {
    const dir = path.join(__dirname, `components/service/${service}`);
    if (fs.existsSync(dir)) {
        fs.readdirSync(dir).forEach(file => {
            if (file.endsWith('.tsx')) {
                const filePath = path.join(dir, file);
                let content = fs.readFileSync(filePath, 'utf8');
                let originalContent = content;
                
                fixes.forEach(f => {
                    content = content.replace(f.target, f.replace);
                });
                
                if (content !== originalContent) {
                    fs.writeFileSync(filePath, content);
                    console.log(`Fixed CSS imports in ${filePath}`);
                }
            }
        });
    }
});
