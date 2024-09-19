import React from "react"
import clsx from "clsx"

import { Tag } from "@/shared/components/elements"

import { InfoFooter } from "./InfoFooter"

import styles from "./Footer.module.scss"

interface Props {
  className?: string
}

export const Footer = ({ className }: Props) => {
  return (
    <footer className={clsx(styles.footer, className)}>
      <div className={clsx("container", styles.footer__container)}>
        <div className={clsx(styles.footer__info)}>
          <InfoFooter />
          <div className={clsx(styles.footer__section_nav)}>
            <div className={clsx(styles.footer__nav)}>
              <h4 className={clsx(styles.footer__nav__title)}>About Bookstore</h4>
              <ul className={clsx(styles.footer__nav__list)}>
                <li>
                  <a href="/">Explore</a>
                </li>
                <li>
                  <a href="/">Jobs</a> <Tag status={true}>NEW!</Tag>
                </li>
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className={clsx(styles.footer__nav)}>
              <h4 className={clsx(styles.footer__nav__title)}>Others</h4>
              <ul className={clsx(styles.footer__nav__list)}>
                <li>
                  <a href="/">Term and Conditions</a>
                </li>
                <li>
                  <a href="/">Privacy Policy</a>
                </li>
                <li>
                  <a href="/">Help Center</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={clsx(styles.footer__copyright, className)}>
          Copyright © 2022 Bookstore. All rights reserved
          <div className={clsx(styles.footer__copyright__media)}>
            <a href="https://www.instagram.com/">
              <img src="/img/instagram.svg" alt="Instagram Logo" />
            </a>
            <a href="https://www.linkedin.com/">
              <img src="/img/linkedin.svg" alt="LinkedIn Logo" />
            </a>
            <a href="https://www.facebook.com/">
              <img src="/img/facebook.svg" alt="Facebook Logo" />
            </a>
            <a href="https://x.com/">
              <img src="/img/twitter.svg" alt="X Logo" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
