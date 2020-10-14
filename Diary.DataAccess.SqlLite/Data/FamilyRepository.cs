using System;
using System.Collections.Generic;
using System.Linq;
using Diary.Core.Contracts;
using Diary.Core.Models;

namespace Diary.DataAccess.SqlLite.Data
{
    public class FamilyRepository : IFamilyRepository
    {
        private readonly DataContext _context;
        internal Microsoft.EntityFrameworkCore.DbSet<Family> dbSet;

        public FamilyRepository(DataContext context)
        {
            _context = context;
            this.dbSet = context.Set<Family>();
        }

        public Family GetFamily(int id)
        {
            return _context.Family.FirstOrDefault(x => x.Id == id);
        }
    }
}