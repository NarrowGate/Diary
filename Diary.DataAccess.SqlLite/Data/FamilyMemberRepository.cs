using System;
using System.Collections.Generic;
using System.Linq;
using Diary.Core.Contracts;
using Diary.Core.Models;

namespace Diary.DataAccess.SqlLite.Data
{
    public class FamilyMemberRepository : IFamilyMemberRepository
    {
        private readonly DataContext _context;
        internal Microsoft.EntityFrameworkCore.DbSet<FamilyMember> dbSet;

        public FamilyMemberRepository(DataContext context)
        {
            _context = context;
            this.dbSet = context.Set<FamilyMember>();
        }

        FamilyMember IFamilyMemberRepository.GetFamilyMem(int id)
        {
            return _context.FamilyMembers.FirstOrDefault(x => x.Id == id);
        }

        IEnumerable<FamilyMember> IFamilyMemberRepository.AddMember(FamilyMember newMember)
        {


            dbSet.Add(newMember);

            _context.SaveChanges();

            return dbSet;
        }
        
        IEnumerable<FamilyMember> IFamilyMemberRepository.GetFamilyMembers()
        {
            return _context.FamilyMembers;
        }
    }
}
