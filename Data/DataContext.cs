using Diary.Models;
using Microsoft.EntityFrameworkCore;

namespace Diary.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<Member> Members { get; set; }
    }
}