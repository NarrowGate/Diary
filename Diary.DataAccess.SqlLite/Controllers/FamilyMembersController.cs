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
            return Ok(_familyMemberRepository.GetFamilyMem(id));
        }

        [HttpPost("AddMember")]
        public ActionResult AddMember(TesterDto data)
        {

            FamilyMember newMember = new FamilyMember();

            newMember.Name = data.Name;
            newMember.Role = data.Role;
            newMember.Gender = data.Gender;
            newMember.Occupation = data.Occupation;
            newMember.Description = data.Description;

            _familyMemberRepository.AddMember(newMember);


            var familyMembers = _familyMemberRepository.GetFamilyMembers().ToList();
            //return familyMembers.ToHttpResponse();

            return new ObjectResult(familyMembers);

            //return RedirectToAction("GetFamilyMembers", "FamilyMembers");
        }

    }
}