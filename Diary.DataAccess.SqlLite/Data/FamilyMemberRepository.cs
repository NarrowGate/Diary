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

        public FamilyMember GetFamilyMember(int id)
        {
            return _context.FamilyMembers.FirstOrDefault(x => x.Id == id);
        }

        public IEnumerable<FamilyMember> AddMember(FamilyMember newMember)
        {
            dbSet.Add(newMember);
            _context.SaveChanges();
            return dbSet;
        }

        public FamilyMember EditMember(FamilyMember member)
        {
            var memberTobeUpdated = _context.FamilyMembers.FirstOrDefault(x => x.Id == member.Id);
            memberTobeUpdated.Name = member.Name;

            //dbSet.Add(newMember);
            _context.SaveChanges();
            return memberTobeUpdated;
        }

        public FamilyMember DeleteMember(FamilyMember member)
        {
            var memberTobeDeleted = _context.FamilyMembers.FirstOrDefault(x => x.Id == member.Id);

            dbSet.Remove(memberTobeDeleted);
            _context.SaveChanges();
            return memberTobeDeleted;
        }

        public IEnumerable<FamilyMember> GetFamilyMembers()
        {
            return _context.FamilyMembers;
        }
    }
}
