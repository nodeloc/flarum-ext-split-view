import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import ComposerState from 'flarum/forum/states/ComposerState';
import ComposerBody from 'flarum/forum/components/ComposerBody';
import DiscussionComposer from 'flarum/forum/components/DiscussionComposer';
import TextEditor from 'flarum/common/components/TextEditor';
import Button from 'flarum/common/components/Button';
import Tooltip from 'flarum/common/components/Tooltip';
app.initializers.add('nodeloc-split-view', () => {
	extend(ComposerState.prototype, 'load', function (_, componentClass) {
    this.isSplitView = false;
	});

  extend(TextEditor.prototype, 'controlItems', function (items) {
    items.add(
      'preview',
      <Tooltip text={app.translator.trans('core.forum.composer.preview_tooltip')}>
        <Button icon="fas fa-columns" className="Button Button--icon" onclick={this.attrs.preview} />
      </Tooltip>
    );
  });

	extend(ComposerBody.prototype, 'headerItems', function (items) {
		if (app.current.get('stream')?.discussion) {
			return
		}

		items.add(
			'preview-discussion',
			<div
				className={`Split-view Post-body ${app.composer.isSplitView ? '' : 'hidden'}`}
			></div>,
			50
		);
	});

	DiscussionComposer.prototype.jumpToPreview = function (e) {
		if (!(e instanceof MouseEvent)) {
			return;
		}

		this.composer.isSplitView = !this.composer.isSplitView;

		if (this.composer.isSplitView) {
      this.$('.TextEditor textarea').css({ width: '50%' });
      let previousContent = this.composer.fields.content();
      s9e.TextFormatter.preview(
        this.composer.fields.content(),
        this.$('.Split-view')[0]
      );
      this.composerPreviewInterval = setInterval( () =>{
        const currentContent = this.composer.fields.content();
        if (currentContent !== previousContent) {
          previousContent = currentContent;
          s9e.TextFormatter.preview(
            currentContent,
            this.$('.Split-view')[0]
          );
        }
      }, 100);
		}else{
      this.$('.TextEditor textarea').css({ width: '100%' });
    }
	};

	extend(ComposerBody.prototype, 'oncreate', function () {
		this.composerPreviewInterval = setInterval(function () {
			if (app.composer.isSplitView) {
				const $textarea = this.$('.TextEditor textarea');
				if ($textarea.offset()) {
					this.$('.Split-view').css({
						width: $textarea.width(),
						height: $textarea.height() + 10,
						top: $textarea.offset().top - $('.Composer').offset().top,
						left: $textarea.offset().left - $('.Composer').offset().left+$textarea.width(),
					});
				}
			}
		}, 100);
	});

  extend(ComposerBody.prototype, 'onremove', function () {
    clearInterval(this.composerPreviewInterval)
  })
});
