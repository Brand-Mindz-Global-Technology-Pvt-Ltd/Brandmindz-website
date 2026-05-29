const fs = require('fs');

let code = fs.readFileSync('data/ecommerceData.ts', 'utf8');

const uniqueStats = {
  flipkartListing: [
    { number: "1,000+", label: "Listings Optimized" },
    { number: "300+", label: "Sellers Served" },
    { number: "40%+", label: "Conversion Improvement" },
    { number: "85%+", label: "Improved Search Visibility" },
  ],
  amazonListing: [
    { number: "1,200+", label: "Listings Optimized" },
    { number: "350+", label: "Sellers Served" },
    { number: "45%+", label: "Conversion Improvement" },
    { number: "90%+", label: "Improved Search Visibility" },
  ],
  meeshoListing: [
    { number: "1,000+", label: "Listings Optimized" },
    { number: "250+", label: "Sellers Served" },
    { number: "40%+", label: "Conversion Improvement" },
    { number: "75%+", label: "Improved Search Visibility" },
  ],
  myntraListing: [
    { number: "1,200+", label: "Myntra Listings Optimized" },
    { number: "320+", label: "Fashion Sellers Supported" },
    { number: "45%+", label: "Conversion Improvement" },
    { number: "90%+", label: "Better Search Visibility" },
  ],
  jiomartListing: [
    { number: "1,200+", label: "Listings Optimized" },
    { number: "320+", label: "Sellers Supported" },
    { number: "38%+", label: "Conversion Growth" },
    { number: "80%+", label: "Search Visibility Increase" },
  ],
  sellerAccountManagement: [
    { number: "1,500+", label: "Products Managed" },
    { number: "320+", label: "Seller Accounts Supported" },
    { number: "45%+", label: "Faster Catalog Updates" },
    { number: "90%+", label: "Account Compliance Success" },
  ]
};

for (const [key, stats] of Object.entries(uniqueStats)) {
  const statsString = `stats: [
        { number: "${stats[0].number}", label: "${stats[0].label}" },
        { number: "${stats[1].number}", label: "${stats[1].label}" },
        { number: "${stats[2].number}", label: "${stats[2].label}" },
        { number: "${stats[3].number}", label: "${stats[3].label}" },
      ]`;

  const regex = new RegExp(`(${key}:\\s*\\{[\\s\\S]*?hero:\\s*\\{[\\s\\S]*?)stats:\\s*\\[[\\s\\S]*?\\]`, 'g');
  code = code.replace(regex, `$1${statsString}`);
}

fs.writeFileSync('data/ecommerceData.ts', code);
console.log("Unique stats added!");
