export class IconType {
  constructor(
    public value: string,
    public description: string = '',
  ) { }

  public static values(): IconType[] {
    return [
      new IconType('pi pi-align-center', 'Align Center'),
      new IconType('pi pi-align-justify', 'Align Justify'),
      new IconType('pi pi-align-left', 'Align Left'),
      new IconType('pi pi-align-right', 'Align Right'),
      new IconType('pi pi-amazon', 'Amazon'),
      new IconType('pi pi-android', 'Android'),
      new IconType('pi pi-angle-double-down', 'Angle Double Down'),
      new IconType('pi pi-angle-double-left', 'Angle Double Left'),
      new IconType('pi pi-angle-double-right', 'Angle Double Right'),
      new IconType('pi pi-angle-double-up', 'Angle Double Up'),
      new IconType('pi pi-angle-down', 'Angle Down'),
      new IconType('pi pi-angle-left', 'Angle Left'),
      new IconType('pi pi-angle-right', 'Angle Right'),
      new IconType('pi pi-angle-up', 'Angle Up'),
      new IconType('pi pi-apple', 'Apple'),
      new IconType('pi pi-arrow-circle-down', 'Arrow Circle Down'),
      new IconType('pi pi-arrow-circle-left', 'Arrow Circle Left'),
      new IconType('pi pi-arrow-circle-right', 'Arrow Circle Right'),
      new IconType('pi pi-arrow-circle-up', 'Arrow Circle Up'),
      new IconType('pi pi-arrow-down', 'Arrow Down'),
      new IconType('pi pi-arrow-down-left', 'Arrow Down Left'),
      new IconType('pi pi-arrow-down-right', 'Arrow Down Right'),
      new IconType('pi pi-arrow-left', 'Arrow Left'),
      new IconType('pi pi-arrow-right', 'Arrow Right'),
      new IconType('pi pi-arrow-up', 'Arrow Up'),
      new IconType('pi pi-arrow-up-left', 'Arrow Up Left'),
      new IconType('pi pi-arrow-up-right', 'Arrow Up Right'),
      new IconType('pi pi-arrows-h', 'Arrows H'),
      new IconType('pi pi-arrows-v', 'Arrows V'),
      new IconType('pi pi-at', 'At'),
      new IconType('pi pi-backward', 'Backward'),
      new IconType('pi pi-ban', 'Ban'),
      new IconType('pi pi-bars', 'Bars'),
      new IconType('pi pi-bell', 'Bell'),
      new IconType('pi pi-bolt', 'Bolt'),
      new IconType('pi pi-book', 'Book'),
      new IconType('pi pi-bookmark', 'Bookmark'),
      new IconType('pi pi-bookmark-fill', 'Bookmark Fill'),
      new IconType('pi pi-box', 'Box'),
      new IconType('pi pi-briefcase', 'Briefcase'),
      new IconType('pi pi-building', 'Building'),
      new IconType('pi pi-calendar', 'Calendar'),
      new IconType('pi pi-calendar-minus', 'Calendar Minus'),
      new IconType('pi pi-calendar-plus', 'Calendar Plus'),
      new IconType('pi pi-calendar-times', 'Calendar Times'),
      new IconType('pi pi-camera', 'Camera'),
      new IconType('pi pi-car', 'Car'),
      new IconType('pi pi-caret-down', 'Caret Down'),
      new IconType('pi pi-caret-left', 'Caret Left'),
      new IconType('pi pi-caret-right', 'Caret Right'),
      new IconType('pi pi-caret-up', 'Caret Up'),
      new IconType('pi pi-chart-bar', 'Chart Bar'),
      new IconType('pi pi-chart-line', 'Chart Line'),
      new IconType('pi pi-chart-pie', 'Chart Pie'),
      new IconType('pi pi-check', 'Check'),
      new IconType('pi pi-check-circle', 'Check Circle'),
      new IconType('pi pi-check-square', 'Check Square'),
      new IconType('pi pi-chevron-circle-down', 'Chevron Circle Down'),
      new IconType('pi pi-chevron-circle-left', 'Chevron Circle Left'),
      new IconType('pi pi-chevron-circle-right', 'Chevron Circle Right'),
      new IconType('pi pi-chevron-circle-up', 'Chevron Circle Up'),
      new IconType('pi pi-chevron-down', 'Chevron Down'),
      new IconType('pi pi-chevron-left', 'Chevron Left'),
      new IconType('pi pi-chevron-right', 'Chevron Right'),
      new IconType('pi pi-chevron-up', 'Chevron Up'),
      new IconType('pi pi-circle', 'Circle'),
      new IconType('pi pi-circle-fill', 'Circle Fill'),
      new IconType('pi pi-clock', 'Clock'),
      new IconType('pi pi-clone', 'Clone'),
      new IconType('pi pi-cloud', 'Cloud'),
      new IconType('pi pi-cloud-download', 'Cloud Download'),
      new IconType('pi pi-cloud-upload', 'Cloud Upload'),
      new IconType('pi pi-code', 'Code'),
      new IconType('pi pi-cog', 'Cog'),
      new IconType('pi pi-comment', 'Comment'),
      new IconType('pi pi-comments', 'Comments'),
      new IconType('pi pi-compass', 'Compass'),
      new IconType('pi pi-copy', 'Copy'),
      new IconType('pi pi-credit-card', 'Credit Card'),
      new IconType('pi pi-database', 'Database'),
      new IconType('pi pi-desktop', 'Desktop'),
      new IconType('pi pi-directions', 'Directions'),
      new IconType('pi pi-directions-alt', 'Directions Alt'),
      new IconType('pi pi-discord', 'Discord'),
      new IconType('pi pi-dollar', 'Dollar'),
      new IconType('pi pi-download', 'Download'),
      new IconType('pi pi-eject', 'Eject'),
      new IconType('pi pi-ellipsis-h', 'Ellipsis H'),
      new IconType('pi pi-ellipsis-v', 'Ellipsis V'),
      new IconType('pi pi-envelope', 'Envelope'),
      new IconType('pi pi-euro', 'Euro'),
      new IconType('pi pi-exclamation-circle', 'Exclamation Circle'),
      new IconType('pi pi-exclamation-triangle', 'Exclamation Triangle'),
      new IconType('pi pi-external-link', 'External Link'),
      new IconType('pi pi-eye', 'Eye'),
      new IconType('pi pi-eye-slash', 'Eye Slash'),
      new IconType('pi pi-facebook', 'Facebook'),
      new IconType('pi pi-fast-backward', 'Fast Backward'),
      new IconType('pi pi-fast-forward', 'Fast Forward'),
      new IconType('pi pi-file', 'File'),
      new IconType('pi pi-file-excel', 'File Excel'),
      new IconType('pi pi-file-pdf', 'File Pdf'),
      new IconType('pi pi-filter', 'Filter'),
      new IconType('pi pi-filter-fill', 'Filter Fill'),
      new IconType('pi pi-filter-slash', 'Filter Slash'),
      new IconType('pi pi-flag', 'Flag'),
      new IconType('pi pi-flag-fill', 'Flag Fill'),
      new IconType('pi pi-folder', 'Folder'),
      new IconType('pi pi-folder-open', 'Folder Open'),
      new IconType('pi pi-forward', 'Forward'),
      new IconType('pi pi-github', 'Github'),
      new IconType('pi pi-globe', 'Globe'),
      new IconType('pi pi-google', 'Google'),
      new IconType('pi pi-hashtag', 'Hashtag'),
      new IconType('pi pi-heart', 'Heart'),
      new IconType('pi pi-heart-fill', 'Heart Fill'),
      new IconType('pi pi-history', 'History'),
      new IconType('pi pi-home', 'Home'),
      new IconType('pi pi-id-card', 'Id Card'),
      new IconType('pi pi-image', 'Image'),
      new IconType('pi pi-images', 'Images'),
      new IconType('pi pi-inbox', 'Inbox'),
      new IconType('pi pi-info', 'Info'),
      new IconType('pi pi-info-circle', 'Info Circle'),
      new IconType('pi pi-instagram', 'Instagram'),
      new IconType('pi pi-key', 'Key'),
      new IconType('pi pi-link', 'Link'),
      new IconType('pi pi-linkedin', 'Linkedin'),
      new IconType('pi pi-list', 'List'),
      new IconType('pi pi-lock', 'Lock'),
      new IconType('pi pi-lock-open', 'Lock Open'),
      new IconType('pi pi-map', 'Map'),
      new IconType('pi pi-map-marker', 'Map Marker'),
      new IconType('pi pi-microsoft', 'Microsoft'),
      new IconType('pi pi-minus', 'Minus'),
      new IconType('pi pi-minus-circle', 'Minus Circle'),
      new IconType('pi pi-mobile', 'Mobile'),
      new IconType('pi pi-money-bill', 'Money Bill'),
      new IconType('pi pi-moon', 'Moon'),
      new IconType('pi pi-palette', 'Palette'),
      new IconType('pi pi-paperclip', 'Paperclip'),
      new IconType('pi pi-pause', 'Pause'),
      new IconType('pi pi-paypal', 'Paypal'),
      new IconType('pi pi-pencil', 'Pencil'),
      new IconType('pi pi-percentage', 'Percentage'),
      new IconType('pi pi-phone', 'Phone'),
      new IconType('pi pi-play', 'Play'),
      new IconType('pi pi-plus', 'Plus'),
      new IconType('pi pi-plus-circle', 'Plus Circle'),
      new IconType('pi pi-pound', 'Pound'),
      new IconType('pi pi-power-off', 'Power Off'),
      new IconType('pi pi-prime', 'Prime'),
      new IconType('pi pi-print', 'Print'),
      new IconType('pi pi-qrcode', 'Qrcode'),
      new IconType('pi pi-question', 'Question'),
      new IconType('pi pi-question-circle', 'Question Circle'),
      new IconType('pi pi-reddit', 'Reddit'),
      new IconType('pi pi-refresh', 'Refresh'),
      new IconType('pi pi-replay', 'Replay'),
      new IconType('pi pi-reply', 'Reply'),
      new IconType('pi pi-save', 'Save'),
      new IconType('pi pi-search', 'Search'),
      new IconType('pi pi-search-minus', 'Search Minus'),
      new IconType('pi pi-search-plus', 'Search Plus'),
      new IconType('pi pi-send', 'Send'),
      new IconType('pi pi-server', 'Server'),
      new IconType('pi pi-share-alt', 'Share Alt'),
      new IconType('pi pi-shield', 'Shield'),
      new IconType('pi pi-shopping-bag', 'Shopping Bag'),
      new IconType('pi pi-shopping-cart', 'Shopping Cart'),
      new IconType('pi pi-sign-in', 'Sign In'),
      new IconType('pi pi-sign-out', 'Sign Out'),
      new IconType('pi pi-sitemap', 'Sitemap'),
      new IconType('pi pi-slack', 'Slack'),
      new IconType('pi pi-sliders-h', 'Sliders H'),
      new IconType('pi pi-sliders-v', 'Sliders V'),
      new IconType('pi pi-sort', 'Sort'),
      new IconType('pi pi-sort-alpha-down', 'Sort Alpha Down'),
      new IconType('pi pi-sort-alpha-down-alt', 'Sort Alpha Down Alt'),
      new IconType('pi pi-sort-alpha-up', 'Sort Alpha Up'),
      new IconType('pi pi-sort-alpha-up-alt', 'Sort Alpha Up Alt'),
      new IconType('pi pi-sort-alt', 'Sort Alt'),
      new IconType('pi pi-sort-alt-slash', 'Sort Alt Slash'),
      new IconType('pi pi-sort-amount-down', 'Sort Amount Down'),
      new IconType('pi pi-sort-amount-down-alt', 'Sort Amount Down Alt'),
      new IconType('pi pi-sort-amount-up', 'Sort Amount Up'),
      new IconType('pi pi-sort-amount-up-alt', 'Sort Amount Up Alt'),
      new IconType('pi pi-sort-down', 'Sort Down'),
      new IconType('pi pi-sort-numeric-down', 'Sort Numeric Down'),
      new IconType('pi pi-sort-numeric-down-alt', 'Sort Numeric Down Alt'),
      new IconType('pi pi-sort-numeric-up', 'Sort Numeric Up'),
      new IconType('pi pi-sort-numeric-up-alt', 'Sort Numeric Up Alt'),
      new IconType('pi pi-sort-up', 'Sort Up'),
      new IconType('pi pi-spinner', 'Spinner'),
      new IconType('pi pi-star', 'Star'),
      new IconType('pi pi-star-fill', 'Star Fill'),
      new IconType('pi pi-step-backward', 'Step Backward'),
      new IconType('pi pi-step-backward-alt', 'Step Backward Alt'),
      new IconType('pi pi-step-forward', 'Step Forward'),
      new IconType('pi pi-step-forward-alt', 'Step Forward Alt'),
      new IconType('pi pi-stop', 'Stop'),
      new IconType('pi pi-stop-circle', 'Stop Circle'),
      new IconType('pi pi-sun', 'Sun'),
      new IconType('pi pi-sync', 'Sync'),
      new IconType('pi pi-table', 'Table'),
      new IconType('pi pi-tablet', 'Tablet'),
      new IconType('pi pi-tag', 'Tag'),
      new IconType('pi pi-tags', 'Tags'),
      new IconType('pi pi-telegram', 'Telegram'),
      new IconType('pi pi-th-large', 'Th Large'),
      new IconType('pi pi-thumbs-down', 'Thumbs Down'),
      new IconType('pi pi-thumbs-up', 'Thumbs Up'),
      new IconType('pi pi-ticket', 'Ticket'),
      new IconType('pi pi-times', 'Times'),
      new IconType('pi pi-times-circle', 'Times Circle'),
      new IconType('pi pi-trash', 'Trash'),
      new IconType('pi pi-twitter', 'Twitter'),
      new IconType('pi pi-undo', 'Undo'),
      new IconType('pi pi-unlock', 'Unlock'),
      new IconType('pi pi-upload', 'Upload'),
      new IconType('pi pi-user', 'User'),
      new IconType('pi pi-user-edit', 'User Edit'),
      new IconType('pi pi-user-minus', 'User Minus'),
      new IconType('pi pi-user-plus', 'User Plus'),
      new IconType('pi pi-users', 'Users'),
      new IconType('pi pi-video', 'Video'),
      new IconType('pi pi-vimeo', 'Vimeo'),
      new IconType('pi pi-volume-down', 'Volume Down'),
      new IconType('pi pi-volume-off', 'Volume Off'),
      new IconType('pi pi-volume-up', 'Volume Up'),
      new IconType('pi pi-wallet', 'Wallet'),
      new IconType('pi pi-whatsapp', 'Whatsapp'),
      new IconType('pi pi-wifi', 'Wifi'),
      new IconType('pi pi-window-maximize', 'Window Maximize'),
      new IconType('pi pi-window-minimize', 'Window Minimize'),
      new IconType('pi pi-youtube', 'Youtube'),
    ];
  }

  public equals(icon: IconType): boolean {
    return this.value === icon.value;
  }

  public static getByCodigo(codValue: string) {
    return IconType.values().find(icon => icon.value === codValue);
  }
}
