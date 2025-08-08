import Image from "next/image";

export default function VisionMission() {
  return (
    <section className="py-24 bg-cover bg-center bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center text-gray-800 dark:text-gray-900 bg-wti">
        {/* Judul */}
        <h3 className="text-m text-black-300">Our Vision & Mission</h3>
        <p className="text-3xl font-semibold text-black-800">Innovating for a Better Tomorrow</p> {/* Slogan updated */}
        <hr className="my-4 border-t-4 w-20 mx-auto border-teal-600" />
        <p className="text-gray-600 mb-8">
          Kami hadir untuk menginspirasi dan mendorong inovasi yang memberi dampak positif bagi masyarakat.
        </p>

        {/* Layout Flex untuk Gambar dan Teks */}
        <div className="mb-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Gambar */}
          <div className="lg:w-1/2">
            <Image
              src="/images/services.jpg"
              alt="Vision and Mission"
              className="w-full h-150 rounded-lg shadow-lg object-cover"
              width={600}
              height={600}
            />
          </div>

          {/* Teks */}
          <div className="lg:w-1/2 text-left">
            {/* Vision */}
            <div className="mb-6">
              <h4 className="text-2xl font-semibold text-black">Our Vision</h4>
                      <hr className="my-4 border-t-4 w-20  border-teal-600" />
              <p className="text-lg text-gray-700 leading-relaxed">
                Kami berkomitmen untuk menjadi pusat inovasi teknologi yang menginspirasi dan memberdayakan komunitas di seluruh dunia. Misi kami adalah untuk menciptakan solusi berkelanjutan yang dapat meningkatkan kualitas hidup manusia secara holistik. Kami percaya bahwa melalui kolaborasi lintas sektor—termasuk teknologi, pendidikan, dan kebijakan publik—kami dapat mendorong perubahan positif yang berdampak besar, tidak hanya dalam hal efisiensi, tetapi juga dalam menciptakan masa depan yang lebih inklusif, adil, dan ramah lingkungan. Dengan teknologi sebagai pendorong utama, kami bertujuan untuk menciptakan ekosistem yang saling mendukung, memungkinkan semua pihak untuk berinovasi, berbagi pengetahuan, dan menciptakan solusi yang berdampak jangka panjang.
              </p>
            </div>

            {/* Mission */}
            <div>
              <h4 className="text-2xl font-semibold text-black">Our Mission</h4>
                      <hr className="my-4 border-t-4 w-20  border-teal-600" />
              <p className="text-lg text-gray-700 leading-relaxed">
                Menyediakan pembelajaran teknologi yang mudah diakses, membuka peluang kolaborasi kreatif, mengembangkan produk berbasis inovasi, serta mendukung proyek-proyek yang memberikan dampak sosial nyata bagi masyarakat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
