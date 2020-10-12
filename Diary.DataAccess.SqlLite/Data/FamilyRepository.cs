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

        public FamilyRepository(DataContext context)
        {
            _context = context;
        }

        public Family GetFamily(int id)
        {
            return _context.Family.FirstOrDefault(x => x.Id == id);
        }
    }
}