<!-- Footer -->
<footer class="site-footer">
    <div class="footer-main container">
        <!-- Tagline -->
        <div class="footer-tagline">
            <p class="label">GPG Facility Management:</p>
            <h3>Facilitaire diensten voor engineering, realisatie en beheer</h3>
            <p class="sub">Onderdeel van GSA groep</p>
        </div>

        <!-- Footer Grid -->
        <div class="footer-grid">
            <!-- Address -->
            <div>
                <h4>Adres</h4>
                <p style="font-size:0.875rem; line-height:1.8;">
                    <?php echo nl2br( esc_html( gpg_get( 'gpg_address', "Valkweg 111\n1118 ED Schiphol" ) ) ); ?>
                </p>
            </div>

            <!-- Contact -->
            <div>
                <h4>Contact</h4>
                <p style="font-size:0.875rem; line-height:2;">
                    <a href="tel:<?php echo esc_attr( str_replace( ' ', '', gpg_get( 'gpg_phone', '+31207952100' ) ) ); ?>">
                        ☎ <?php echo esc_html( gpg_get( 'gpg_phone', '020 - 795 21 00' ) ); ?>
                    </a><br>
                    <a href="mailto:<?php echo esc_attr( gpg_get( 'gpg_email', 'info@gpgfacilities.nl' ) ); ?>">
                        ✉ <?php echo esc_html( gpg_get( 'gpg_email', 'info@gpgfacilities.nl' ) ); ?>
                    </a>
                </p>
                <p style="font-size:0.75rem; color:rgba(255,255,255,0.5); margin-top:0.5rem;">
                    BTW-id: <?php echo esc_html( gpg_get( 'gpg_btw', 'NL854426036B01' ) ); ?><br>
                    KvK: <?php echo esc_html( gpg_get( 'gpg_kvk', '61641987' ) ); ?>
                </p>
            </div>

            <!-- Diensten -->
            <div>
                <h4>Diensten</h4>
                <ul>
                    <li><a href="#diensten">Huismeesterdiensten</a></li>
                    <li><a href="#diensten">Verhuizen</a></li>
                    <li><a href="#diensten">Integrated Facilities</a></li>
                    <li><a href="#diensten">Fit-out's</a></li>
                </ul>
            </div>

            <!-- Quick links -->
            <div>
                <h4>Snel Naar</h4>
                <ul>
                    <li><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Home</a></li>
                    <li><a href="#over-ons">Over ons</a></li>
                    <li><a href="#diensten">Diensten</a></li>
                    <li><a href="#projecten">Projecten</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </div>

    <!-- Bottom bar -->
    <div class="footer-bottom container">
        <p>&copy; GPG Facility Management <?php echo date( 'Y' ); ?>. Alle rechten voorbehouden.</p>
        <div>
            <a href="<?php echo esc_url( home_url( '/voorwaarden' ) ); ?>">Algemene voorwaarden</a> |
            <a href="<?php echo esc_url( home_url( '/privacy' ) ); ?>">Privacyverklaring</a>
            <?php $linkedin = gpg_get( 'gpg_linkedin', '' ); if ( $linkedin ) : ?>
                | <a href="<?php echo esc_url( $linkedin ); ?>" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
            <?php endif; ?>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
