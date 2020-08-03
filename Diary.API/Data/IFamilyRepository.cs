using System;
using Diary.Core.Models;

namespace Diary.API.Data
{
    public interface IFamilyRepository
    {
        public Family GetFamily(int id);
    }
}
