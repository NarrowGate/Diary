using System;
using System.Collections.Generic;
using Diary.Core.Models;

namespace Diary.Core.Contracts
{
    public interface IFamilyMemberRepository
    {
        public IEnumerable<FamilyMember> GetFamilyMembers();
        public FamilyMember GetFamilyMember(int id);
        public IEnumerable<FamilyMember> AddMember(FamilyMember member);
        public FamilyMember EditMember(FamilyMember member);
    }
}
