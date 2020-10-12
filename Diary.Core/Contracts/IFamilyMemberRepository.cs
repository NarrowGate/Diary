using System;
using System.Collections.Generic;
using Diary.Core.Models;

namespace Diary.Core.Contracts
{
    public interface IFamilyMemberRepository
    {
        public IEnumerable<FamilyMember> GetFamilyMembers();
        public FamilyMember GetFamilyMem(int id);
    }
}
