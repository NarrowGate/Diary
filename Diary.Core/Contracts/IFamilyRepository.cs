using System;
using Diary.Core.Models;

namespace Diary.Core.Contracts
{
    public interface IFamilyRepository
    {
        public Family GetFamily(int id);
    }
}
