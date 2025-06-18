export default function Gallery() {
  const galleryImg = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1677825950108-57a3ed44195e?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1618495486072-409db92fc406?q=80&w=963&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1520714760316-984348992242?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1749280447562-d7e04018c42a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1665214081622-0e37b0b7c96b?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1622532631316-5f8afb40812f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1482350325005-eda5e677279b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="bg-white">
      <section className="py-16 px-2 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-oswald uppercase mb-4">
            Our Gallery
          </h2>
          <div className="w-20 h-0.5 bg-grenadine mb-6 mx-auto" />
          <p className="text-sm mb-8 max-w-2xl mx-auto">
            Step into our world through these captured moments that tell the
            story of our culinary passion. From the artistry of our dishes to
            the warmth of our atmosphere, each image reflects the dedication and
            craft that goes into every experience we create for our guests.
          </p>
        </div>

        {/* img grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {galleryImg.map((image) => (
            <div key={image.id} className="group relative aspect-portrait">
              <img src={image.image} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
