using System;
using System.Collections.Generic;
using Diary.Core.Models;

namespace Diary.API.Data
{
    public interface IFamilyMemberRepository
    {
        public IEnumerable<FamilyMember> GetFamilyMembers();
        public FamilyMember GetFamilyMember(int id);
    }
}
