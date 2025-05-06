import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';

@Module({
  imports:[UserModule],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
// This module imports the UserModule, which is likely responsible for user-related operations. It also provides the AuthService and AuthController, which handle authentication logic and HTTP requests related to authentication, respectively.
// The AuthService is where the core authentication logic resides, such as validating user credentials, generating tokens, and managing user sessions. The AuthController handles incoming HTTP requests related to authentication, such as login and registration endpoints. By organizing the authentication functionality into a separate module, the codebase becomes more modular and maintainable.