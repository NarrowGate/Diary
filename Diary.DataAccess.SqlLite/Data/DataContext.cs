using System;
using Diary.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace Diary.DataAccess.SqlLite.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<Family> Family { get; set; }
        public DbSet<FamilyMember> FamilyMembers { get; set; }
    }
}

//dotnet ef migrations add testmigration
//dotnet ef database update