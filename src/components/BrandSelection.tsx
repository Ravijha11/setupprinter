
const BrandSelection = () => {
  const brands = [
    { name: "Canon", color: "text-red-600" },
    { name: "HP", color: "text-blue-600" },
    { name: "EPSON", color: "text-blue-800" },
    { name: "brother", color: "text-orange-600", subtitle: "at your side" }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Blue header section */}
        <div className="bg-blue-600 text-white rounded-xl p-8 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-6">
            CHOOSE PRINTER BRAND
          </h2>
          <p className="text-center text-lg leading-relaxed max-w-4xl mx-auto">
            Select your printer brand to access all necessary troubleshooting step-by-step instructions for issues like printer offline, wireless setup, not printing, blank prints, error codes or scanner issues.
          </p>
        </div>

        {/* Brand logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {brands.map((brand, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 mx-auto bg-white rounded-full border-4 border-red-500 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <div className={`text-center ${brand.color}`}>
                  <div className="text-2xl font-bold">{brand.name}</div>
                  {brand.subtitle && (
                    <div className="text-sm">{brand.subtitle}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSelection;
