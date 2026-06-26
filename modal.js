(function () {
	const modal = document.getElementById('movieModal');
	const modalContent = document.getElementById('modalContent');
	const closeBtn = document.getElementById('closeModal');
	const modalBody = document.getElementById('modalBody');

	function openModal(html) {
		if (!modal) return;
		modalBody.innerHTML = html || '';
		modal.setAttribute('aria-hidden', 'false');
		modal.classList.add('open');
		document.body.style.overflow = 'hidden';
		// focus first focusable element inside modal
		const focusable = modal.querySelector('button, a, input, [tabindex]');
		if (focusable) focusable.focus();
	}

	function closeModal() {
		if (!modal) return;
		modal.setAttribute('aria-hidden', 'true');
		modal.classList.remove('open');
		document.body.style.overflow = '';
		// return focus to the last active element if needed
		if (document._lastActive) document._lastActive.focus();
	}

	function onDocumentKey(e) {
		if (e.key === 'Escape') closeModal();
	}

	function onOverlayClick(e) {
		if (e.target === modal) closeModal();
	}

	function initModal() {
		if (!modal) return;
		// store last active element when opening
		document.addEventListener('click', (ev) => {
			const openTrigger = ev.target.closest('[data-open-modal]');
			if (openTrigger) {
				document._lastActive = ev.target;
				const html = openTrigger.dataset.modalContent || '';
				openModal(html);
			}
		});

		closeBtn && closeBtn.addEventListener('click', closeModal);
		document.addEventListener('keydown', onDocumentKey);
		modal.addEventListener('click', onOverlayClick);
	}

	// expose simple API
	window.movieModal = {
		init: initModal,
		open: openModal,
		close: closeModal,
	};

	// auto-init if DOM already loaded
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', () => window.movieModal.init());
	} else {
		window.movieModal.init();
	}
})();

