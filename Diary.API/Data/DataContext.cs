using System;
using Diary.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace Diary.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Family> Family { get; set; }
        public DbSet<FamilyMember> FamilyMembers { get; set; }
    }
}
