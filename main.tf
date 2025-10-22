terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "6.17.0"
    }
  }
}

resource "aws_instance" "myTerraformInstance" {
  ami                    = "ami-0341d95f75f311023"
  instance_type          = "t2.micro"
  iam_instance_profile   = aws_iam_instance_profile.ssm_instance_profile.name
  tags = {
    Name = "MyTerraformInstanceNew"
  }
}