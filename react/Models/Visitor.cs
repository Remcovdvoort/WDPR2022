﻿using Microsoft.AspNetCore.Identity;


public class Visitor
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public string? LastName { get; set; }
    public IdentityUser IdentityUser { get; set; }
}