import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule], // Importa los módulos necesarios
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejercicio8';

  registroFormulario: FormGroup;

  constructor(private fb: FormBuilder) {
    // Inicializar el formulario con validaciones
    this.registroFormulario = this.fb.group({
      name: ['', [Validators.required]], // Campo obligatorio
      email: ['', [Validators.required, Validators.email]], // Obligatorio y formato de email
      password: ['', [Validators.required, Validators.minLength(6)]], // Obligatorio, mínimo 6 caracteres
    });
  }

  // Método para manejar el envío del formulario
  onSubmit(): void {
    if (this.registroFormulario.valid) {
      alert('Formulario enviado con éxito');
      console.log(this.registroFormulario.value);
    } else {
      alert('Por favor, corrige los errores en el formulario.');
    }
  }

  // Métodos para mostrar mensajes de error
  get nombre() {
    return this.registroFormulario.get('name');
  }

  get email() {
    return this.registroFormulario.get('email');
  }

  get password() {
    return this.registroFormulario.get('password');
  }
}



  
