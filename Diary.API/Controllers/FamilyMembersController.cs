using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Diary.API.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Diary.API.Controllers
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
        public IActionResult GetFamilyMember(int id)
        {
            var familyMember = _familyMemberRepository.GetFamilyMembers().FirstOrDefault(x => x.Id == id);
            return Ok(familyMember);
        }

    }
}