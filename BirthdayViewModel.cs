namespace BirthdayWish.Models
{
    public class BirthdayViewModel
    {
        public string Name { get; set; } = "";
        public string From { get; set; } = "";
        public string Message { get; set; } = "";

        public List<string> Photos { get; set; } = new();
    }
}