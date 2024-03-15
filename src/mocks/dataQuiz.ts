export default interface IQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string | number;
}

export const questions: IQuestion[] = [
  {
    id: 1,
    question: "Berapa hasil dari 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 1,
  },
  {
    id: 2,
    question:
      "Jika sebuah kotak berwarna merah, dan semua kotak merah, maka warna kotak itu adalah?",
    options: ["Merah", "Biru", "Hijau", "Kuning"],
    correctAnswer: 0,
  },
  {
    id: 3,
    question:
      "Jika semua kucing adalah hewan, dan Mimi adalah kucing, maka Mimi adalah?",
    options: ["Anjing", "Burung", "Ikan", "Hewan"],
    correctAnswer: 3,
  },
  {
    id: 4,
    question:
      "Jika setiap mahasiswa harus lulus ujian untuk mendapatkan gelar, dan Andi adalah mahasiswa, maka Andi harus?",
    options: ["Bekerja", "Lulus ujian", "Tidur", "Makan"],
    correctAnswer: 1,
  },
  {
    id: 5,
    question:
      "Jika semua orang yang senang berenang adalah bahagia, dan Budi senang berenang, maka Budi adalah?",
    options: ["Bahagia", "Sedih", "Lapar", "Lelah"],
    correctAnswer: 0,
  },
  {
    id: 6,
    question:
      "Jika semua manusia adalah makhluk hidup, dan kucing adalah makhluk hidup, maka kucing adalah?",
    options: ["Manusia", "Tumbuhan", "Hewan", "Mineral"],
    correctAnswer: 2,
  },
  {
    id: 7,
    question: "Jika hari ini adalah Senin, maka besok adalah hari?",
    options: ["Selasa", "Rabu", "Kamis", "Jumat"],
    correctAnswer: 0,
  },
  {
    id: 8,
    question:
      "Jika semua burung dapat terbang, dan penguin adalah burung, maka penguin dapat?",
    options: ["Berenang", "Terbang", "Melompat", "Berlari"],
    correctAnswer: 0,
  },
  {
    id: 9,
    question:
      "Jika A lebih besar dari B, dan B lebih besar dari C, maka A adalah?",
    options: ["Terkecil", "Terbesar", "Sedang", "Sama dengan B"],
    correctAnswer: 1,
  },
  {
    id: 10,
    question:
      "Jika semua segitiga memiliki tiga sisi, dan lingkaran tidak memiliki sisi, maka segitiga adalah?",
    options: ["Bulat", "Empat persegi", "Segi banyak", "Tiga sisi"],
    correctAnswer: 3,
  },

  {
    id: 11,
    question:
      "Jika setiap mobil memiliki empat roda, dan sepeda adalah kendaraan yang memiliki dua roda, maka berapa jumlah roda yang dimiliki oleh dua mobil dan dua sepeda?",
    options: ["6", "8", "10", "12"],
    correctAnswer: 2,
  },
  {
    id: 12,
    question: "Jika semua manusia akan mati, maka akhir dari kehidupan adalah?",
    options: ["Kematian", "Kelahiran", "Kiamat", "Hari raya"],
    correctAnswer: 0,
  },
  {
    id: 13,
    question:
      "Jika semua bulan memiliki 28 hari, maka berapa banyak hari dalam sebulan?",
    options: ["28", "30", "31", "Tergantung bulan"],
    correctAnswer: 0,
  },
  {
    id: 14,
    question:
      "Jika semua orang yang memakan makanan sehat adalah kuat, dan Anda memakan makanan sehat, maka Anda adalah?",
    options: ["Kuat", "Lemah", "Sakit", "Gemuk"],
    correctAnswer: 0,
  },
  {
    id: 15,
    question:
      "Jika semua kamera dapat mengambil gambar, dan ponsel memiliki kamera, maka ponsel dapat?",
    options: [
      "Menelpon",
      "Mengirim pesan",
      "Mengambil gambar",
      "Menonton video",
    ],
    correctAnswer: 2,
  },
  {
    id: 16,
    question:
      "Jika semua sapi adalah hewan herbivora, dan hewan herbivora hanya memakan tumbuhan, maka sapi adalah?",
    options: ["Karnivora", "Omnivora", "Herbivora", "Hematofag"],
    correctAnswer: 2,
  },
  {
    id: 17,
    question:
      "Jika semua buah adalah makanan sehat, dan apel adalah buah, maka apel adalah?",
    options: [
      "Sayuran",
      "Makanan cepat saji",
      "Makanan sehat",
      "Makanan ringan",
    ],
    correctAnswer: 2,
  },
  {
    id: 18,
    question:
      "Jika semua ikan hidup di air, dan paus adalah ikan, maka paus hidup di?",
    options: ["Darat", "Langit", "Air", "Bumi"],
    correctAnswer: 2,
  },
  {
    id: 19,
    question:
      "Jika hari ini adalah hari Rabu, dan besok adalah hari Kamis, maka kemarin adalah hari?",
    options: ["Senin", "Selasa", "Rabu", "Minggu"],
    correctAnswer: 1,
  },
  {
    id: 20,
    question:
      "Jika semua burung memiliki sayap, dan ayam adalah burung, maka ayam memiliki?",
    options: ["Sirip", "Ekor", "Sisik", "Sayap"],
    correctAnswer: 3,
  },
];
