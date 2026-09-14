using BirthdayWish.Models;
using Microsoft.AspNetCore.Mvc;

namespace BirthdayWish.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            var model = new BirthdayViewModel
            {
                Name = "NorAfidah",
                From = "Wawa Anak Mak :)",

                Message =
                    "Selamat Hari Lahir Mak. " +
                    "Terima kasih sebab sentiasa ada untuk Wawa dan keluarga. " +
                    "Terima kasih untuk segala kasih sayang, pengorbanan dan kesabaran Mak selama ini. " +
                    "Mak mungkin tak selalu tahu, tapi Wawa sangat hargai semua yang Mak buat untuk kami. " +
                    "Wawa doa semoga Mak sentiasa diberikan kesihatan yang baik, " +
                    "dipanjangkan umur, dimurahkan rezeki dan sentiasa berada dalam lindungan Allah. " +
                    "Semoga Mak sentiasa bahagia dan jangan lupa jaga diri sendiri juga. " +
                    "Wawa sayang Mak sangat-sangat. ❤️",

                Photos = new List<string>
                {
                    "/images/mom1.jpg",
                    "/images/mom2.jpg",
                    "/images/mom3.jpg",
                    "/images/mom4.jpg"
                }
            };

            return View(model);
        }
    }
}