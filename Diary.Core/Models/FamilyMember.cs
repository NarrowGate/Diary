﻿using System;
namespace Diary.Core.Models
{
    public class FamilyMember
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Role { get; set; }
        public string Gender { get; set; }
        public string Occupation { get; set; }
        public string Description { get; set; }

        public FamilyMember()
        {
        }
    }
}
