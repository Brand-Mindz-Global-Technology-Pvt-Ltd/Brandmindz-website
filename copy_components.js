const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'components/service/Branding');

const services = ['Designing', 'Development', 'DigitalMarketing', 'Ecommerce'];

const filesToCopy = [
    { src: 'Bradingabount.tsx', destFn: (s) => `${s}about.tsx` },
    { src: 'FrameworkSection.tsx', destFn: (s) => `${s}Framework.tsx` },
    { src: 'BrandingPackages.tsx', destFn: (s) => `${s}Packages.tsx` },
    { src: 'BrandingCaseStudies.tsx', destFn: (s) => `${s}CaseStudies.tsx` },
    { src: 'WhyChoose.tsx', destFn: (s) => `WhyChoose${s}.tsx` }
];

services.forEach(service => {
    const targetDir = path.join(__dirname, `components/service/${service}`);
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }

    filesToCopy.forEach(f => {
        const srcPath = path.join(srcDir, f.src);
        if(!fs.existsSync(srcPath)) return;

        const destPath = path.join(targetDir, f.destFn(service));
        
        let content = fs.readFileSync(srcPath, 'utf8');
        
        // Component Name replacements
        content = content.replace(/Bradingabount/g, `${service}about`);
        content = content.replace(/FrameworkSection/g, `${service}Framework`);
        content = content.replace(/BrandingPackages/g, `${service}Packages`);
        content = content.replace(/BrandingCaseStudies/g, `${service}CaseStudies`);
        content = content.replace(/WhyChooseBranding/g, `WhyChoose${service}`);

        // Simple text replacements (optional, but helps make them unique placeholders)
        // content = content.replace(/Branding/g, service);
        
        fs.writeFileSync(destPath, content);
        console.log(`Copied and updated ${f.src} to ${destPath}`);
    });
});
