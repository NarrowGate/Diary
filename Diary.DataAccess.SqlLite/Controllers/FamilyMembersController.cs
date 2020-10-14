using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Diary.DataAccess.SqlLite.Data;
using Diary.Core.Contracts;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Diary.Core.Models;
using Diary.Core.DTO;

namespace Diary.DataAccess.SqlLite.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FamilyMembersController : ControllerBase
    {
        private readonly IFamilyMemberRepository _familyMemberRepository;

        public FamilyMembersController(IFamilyMemberRepository familyMemberRepository)
        {
            _familyMemberRepository = familyMemberRepository;
        }

        [HttpGet]
        public IActionResult GetFamilyMembers()
        {
            var familyMembers = _familyMemberRepository.GetFamilyMembers().ToList();
            return Ok(familyMembers);
        }

        [HttpGet("{id}")]
        public IActionResult GetFamilyMem(int id)
        {
            var member = _familyMemberRepository.GetFamilyMember(id);
            return Ok(member);
        }

        [HttpPost("AddMember")]
        public ActionResult AddMember(MemberToAddDto member)
        {
            FamilyMember newMember = new FamilyMember {
                Name = member.Name,
                Role = member.Role,
                Gender = member.Gender,
                Occupation = member.Occupation,
                Description = member.Description
            };

            _familyMemberRepository.AddMember(newMember);
            var familyMembers = _familyMemberRepository.GetFamilyMembers().ToList();
            return new ObjectResult(familyMembers);
        }

        [HttpPost("EditMember")]
        public ActionResult EditMember(MemberToEditDto member)
        {
            int id = Int32.Parse(member.Id);
            FamilyMember updatedMember = new FamilyMember
            {
                Id = id,
                Name = member.Name,
                Role = member.Role,
                Gender = member.Gender,
                Occupation = member.Occupation,
                Description = member.Description
            };
            FamilyMember uM = _familyMemberRepository.EditMember(updatedMember);
            return new ObjectResult(uM);
        }

    }
}