$(document).ready(function() {

    const $contactForm = $('#contactoForm');
    const $alerta = $('#alerta');

    if ($contactForm.length) {
        $contactForm.on('submit', function(event) {
            event.preventDefault();

            if (!this.checkValidity()) {
                event.stopPropagation();
                $(this).addClass('was-validated');
            } else {
                $alerta.removeClass('d-none alert-danger')
                       .addClass('alert-success')
                       .text('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.')
                       .removeClass('d-none');

                this.reset();
                $(this).removeClass('was-validated');

                setTimeout(() => {
                    $alerta.addClass('d-none');
                }, 5000);
            }
        });
    }

    const $testForm = $('#testForm');
    const $resultadoTest = $('#resultadoTest');

    if ($testForm.length) {
        $testForm.on('submit', function(event) {
            event.preventDefault();

            let score = 0;
            let totalQuestions = 0;

            const $p1Answer = $('input[name="p1"]:checked');
            if ($p1Answer.length) {
                totalQuestions++;
                if ($p1Answer.val() === 'correcto') {
                    score++;
                }
            }

            const $p2Answer = $('input[name="p2"]:checked');
            if ($p2Answer.length) {
                totalQuestions++;
                if ($p2Answer.val() === 'correcto') {
                    score++;
                }
            }

            if (totalQuestions > 0) {
                $resultadoTest.html(`Obtuviste ${score} de ${totalQuestions} respuestas correctas.`)
                              .removeClass('d-none text-danger');
            } else {
                $resultadoTest.html('Por favor, responde todas las preguntas antes de enviar.')
                              .removeClass('d-none')
                              .addClass('text-danger');
            }
        });
    }

    const $testModal = $('#testModal');
    if ($testModal.length) {
        $testModal.on('hidden.bs.modal', function () {
            $testForm[0].reset();
            $resultadoTest.addClass('d-none')
                          .removeClass('text-danger');
        });
    }
});